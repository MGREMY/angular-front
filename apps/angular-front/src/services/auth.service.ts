import { inject, Injectable } from '@angular/core';
import { OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { AUTH_CODE_FLOW_CONFIG_TOKEN } from '../../config/auth-code-flow.config';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieOAuthStorageService implements OAuthStorage {
  private cookieService = inject(CookieService);

  public getItem(key: string): string | null {
    return this.cookieService.get(key);
  }
  public removeItem(key: string): void {
    this.cookieService.delete(key);
  }
  public setItem(key: string, data: string): void {
    this.cookieService.set(key, data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly oAuthService = inject(OAuthService);
  private readonly authCodeFlowConfig = inject(AUTH_CODE_FLOW_CONFIG_TOKEN);

  constructor() {
    this.oAuthService.configure(this.authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  public get accessToken() {
    return this.oAuthService.getAccessToken();
  }

  public get refreshToken() {
    return this.oAuthService.getRefreshToken();
  }

  public login(): void {
    this.oAuthService.initLoginFlow();
  }

  public logout(): void {
    this.oAuthService.revokeTokenAndLogout();
  }

  public hasValidAccessToken(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  public canActivateProtectedRoute(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
}
