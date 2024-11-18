import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

type RequestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public readonly authService = inject(AuthService);

  public init(requestMethod: RequestMethods): RequestInit {
    return {
      method: requestMethod,
      headers: {
        Authorization: `Bearer ${this.authService.accessToken}`,
        'Content-Type': 'application/json',
      },
    };
  }

  public initWithJsonBody(
    requestMethod: RequestMethods,
    body: string
  ): RequestInit {
    return {
      ...this.init(requestMethod),
      body: body,
    };
  }

  public initCustomContentType(
    requestMethod: RequestMethods,
    contentType: string
  ): RequestInit {
    return {
      ...this.init(requestMethod),
      headers: {
        'Content-Type': contentType,
      },
    };
  }

  public initWithBody(
    requestMethod: RequestMethods,
    body: unknown
  ): RequestInit {
    return this.initWithJsonBody(requestMethod, JSON.stringify(body));
  }
}
