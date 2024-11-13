import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: process.env['APP_AUTH_ISSUER'],
  redirectUri: process.env['APP_AUTH_REDIRECT_URI'],
  clientId: process.env['APP_AUTH_CLIENT_ID'],
  responseType: process.env['APP_AUTH_RESPONSE_TYPE'],
  scope: process.env['APP_AUTH_SCOPE'],
  customQueryParams: {
    audience: process.env['APP_AUTH_AUDIENCE'],
  },

  // Ne pas utiliser localStorage pour stocker le token
  useSilentRefresh: true,
  silentRefreshRedirectUri: process.env['APP_AUTH_REDIRECT_URI'],
  sessionChecksEnabled: true,

  showDebugInformation: true,
};
