import {
  APP_INITIALIZER,
  ApplicationConfig,
  PLATFORM_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { initFlowbite } from 'flowbite-angular/core';
import {
  DomSanitizer,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { CookieOAuthStorageService } from '../services/auth.service';
import { API_CONFIG_TOKEN, apiConfig } from '../../config/api.config';
import {
  AUTH_CODE_FLOW_CONFIG_TOKEN,
  authCodeFlowConfig,
} from '../../config/auth-code-flow.config';
import { IconRegistry } from 'flowbite-angular/icon';
import { initIcons } from './icon.init';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    initFlowbite(),
    provideAnimations(),
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
    {
      provide: APP_INITIALIZER,
      useFactory: initIcons,
      deps: [IconRegistry, DomSanitizer, PLATFORM_ID],
      multi: true,
    },
  ],
};
