import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { initFlowbite } from 'flowbite-angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { CookieOAuthStorageService } from '../services/auth.service';
import {
  API_CONFIG_TOKEN,
  apiConfig,
} from 'apps/angular-front/config/api.config';
import {
  AUTH_CODE_FLOW_CONFIG_TOKEN,
  authCodeFlowConfig,
} from 'apps/angular-front/config/auth-code-flow.config';

export const appConfig: ApplicationConfig = {
  providers: [
    initFlowbite(),
    provideHttpClient(withFetch()),
    provideOAuthClient(),
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    {
      provide: OAuthStorage,
      useClass: CookieOAuthStorageService,
    },
    {
      provide: API_CONFIG_TOKEN,
      useValue: apiConfig,
    },
    {
      provide: AUTH_CODE_FLOW_CONFIG_TOKEN,
      useValue: authCodeFlowConfig,
    },
  ],
};
