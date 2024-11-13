import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { initFlowbite } from 'flowbite-angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { CookieOAuthStorageService } from '../services/auth.service';

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
  ],
};
