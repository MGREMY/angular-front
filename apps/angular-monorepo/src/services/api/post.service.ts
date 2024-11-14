import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import { ApiRequest } from '../../models/api-request';
import { PostPostRequest } from '../../models/post/post-post.request';
import { setDefaultHeaders } from '../../helpers/fetch.headers';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/post`;

  protected readonly authService = inject(AuthService);

  public get getAllRequest(): ApiRequest {
    return {
      uri: `${this.apiUri}`,
      request: {
        method: 'GET',
        headers: setDefaultHeaders(this.authService),
      },
    };
  }

  public PostRequest(body: PostPostRequest): ApiRequest {
    return {
      uri: `${this.apiUri}`,
      request: {
        method: 'POST',
        headers: setDefaultHeaders(this.authService),
        body: JSON.stringify(body),
      },
    };
  }
}
