import { InjectionToken } from '@angular/core';

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API_CONFIG');

export interface ApiConfig {
  apiUri: string | undefined;
}

export const apiConfig: ApiConfig = {
  apiUri: process.env['APP_API_URI'],
};
