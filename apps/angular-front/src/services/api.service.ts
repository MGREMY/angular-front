import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly authService = inject(AuthService);

  public init(
    requestMethod: RequestMethods,
    abortSignal?: AbortSignal
  ): RequestInit {
    return {
      method: requestMethod,
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`,
        'Content-Type': 'application/json',
      },
      signal: abortSignal,
    };
  }

  public initWithJsonBody(
    requestMethod: RequestMethods,
    body: string,
    abortSignal?: AbortSignal
  ): RequestInit {
    return {
      ...this.init(requestMethod, abortSignal),
      body: body,
    };
  }

  public initCustomContentType(
    requestMethod: RequestMethods,
    contentType: string,
    abortSignal?: AbortSignal
  ): RequestInit {
    return {
      ...this.init(requestMethod, abortSignal),
      headers: {
        'Content-Type': contentType,
      },
    };
  }

  public initWithBody(
    requestMethod: RequestMethods,
    body: unknown,
    abortSignal?: AbortSignal
  ): RequestInit {
    return this.initWithJsonBody(
      requestMethod,
      JSON.stringify(body),
      abortSignal
    );
  }
}
