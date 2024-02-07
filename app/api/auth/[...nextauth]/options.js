import { authenticateUser } from "@app/api/ldap";
import CredentialsProvider from "next-auth/providers/credentials";
const ldap = require("ldapjs");
export const options = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "LDAP",
      async authorize(credentials) {
        try {
          const isAuth = await authenticateUser(
            credentials.username,
            credentials.password
          );
          console.log(isAuth);
          if (isAuth.code === 200) {
            return true;
          } else return null;
        } catch (error) {
          console.log(error);
          throw new Error(error);
        }
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
