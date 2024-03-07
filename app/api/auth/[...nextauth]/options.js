import KeycloakProvider from "next-auth/providers/keycloak";
export const options = {
  pages: {
    signIn: "/",
  },
  providers: [
    KeycloakProvider({
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
      url: process.env.REACT_APP_KEYCLOAK_URL,
      profile: (profile) => ({
        ...profile,
        id: profile.sub,
      }),
      authorization: {
        params: {
          grant_type: "authorization_code",

          response_type: "code",
        },
      },
      httpOptions: {
        timeout: 30000,
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
  callbacks: {
    signIn: async ({ user }) => {
      return user;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        return { ...token };
      }
      return token;
    },
    session: async ({ session, token }) => {
      console.log("session : ", session, "token : ", token);
      return { ...session, ...token };
    },
  },
  strategy: "jwt",
  secret: process.env.NEXT_AUTH_SECRET,
};
