import { AuthService } from '../services/auth.service';

export function setDefaultHeaders(authService: AuthService): HeadersInit {
  return {
    Authorization: `Bearer ${authService.accessToken}`,
    'Content-Type': 'application/json',
  };
}

export function setCustomContentTypeHeader(
  authService: AuthService,
  contentType: string
) {
  return {
    Authorization: `Bearer ${authService.accessToken}`,
    'Content-Type': contentType,
  };
}
