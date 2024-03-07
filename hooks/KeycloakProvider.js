"use client";
import Keycloak from "keycloak-js";
import { createContext, useEffect, useRef } from "react";

export const keycloakContext = createContext({});

const KeycloakProvider = ({ children }) => {
  let _kc = {};
  const isInit = useRef(false);

  const initKeycloak = (onAuthenticatedCallback) => {
    _kc
      .init({
        onLoad: "login-required",
        pkceMethod: "S256",
      })
      .then(() => {
        console.log(_kc);
        onAuthenticatedCallback();
      })
      .catch((error) => console.log(error));
  };

  useEffect(async () => {
    _kc = new Keycloak({
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    });

    initKeycloak();
  }, []);

  const doLogin = _kc.login;

  const doLogout = _kc.logout;

  const getToken = () => _kc.token;

  const getTokenParsed = () => _kc.tokenParsed;

  const isLoggedIn = () => !!_kc.token;

  const updateToken = (successCallback) =>
    _kc.updateToken(5).then(successCallback).catch(doLogin);

  const getUsername = () => _kc.tokenParsed?.preferred_username;
  const updatePassword = () =>
    _kc.login({
      action: "UPDATE_PASSWORD",
    });
  const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

  return (
    <keycloakContext.Provider
      value={{
        _kc,
        initKeycloak,
        doLogin,
        doLogout,
        isLoggedIn,
        getToken,
        getTokenParsed,
        updateToken,
        getUsername,
        hasRole,
        updatePassword,
      }}
    >
      {children}
    </keycloakContext.Provider>
  );
};

const UserService = {};

export default KeycloakProvider;
