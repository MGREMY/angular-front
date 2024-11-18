import { inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import { ApiRequest } from '../../models/api-request';
import { PostPostRequest } from '../../models/post/post';
import { PostPutRequest } from '../../models/post/put';
import { PostPostCommentRequest } from '../../models/post/post-comment';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/post`;

  public getAllRequest(): ApiRequest {
    return {
      uri: this.apiUri,
      request: {
        ...this.apiService.init('GET'),
      },
    };
  }

  public getRequest(postId: string): ApiRequest {
    return {
      uri: `${this.apiUri}/${postId}`,
      request: {
        ...this.apiService.init('GET'),
      },
    };
  }

  public postRequest(body: PostPostRequest): ApiRequest {
    return {
      uri: this.apiUri,
      request: {
        ...this.apiService.initWithBody('POST', body),
      },
    };
  }

  public putRequest(postId: string, body: PostPutRequest): ApiRequest {
    return {
      uri: `${this.apiUri}/${postId}`,
      request: {
        ...this.apiService.initWithBody('PUT', body),
      },
    };
  }

  public deleteRequest(postId: string): ApiRequest {
    return {
      uri: `${this.apiUri}/${postId}`,
      request: {
        ...this.apiService.init('DELETE'),
      },
    };
  }

  public getCommentsRequest(postId: string): ApiRequest {
    return {
      uri: `${this.apiUri}/${postId}/comments`,
      request: {
        ...this.apiService.init('GET'),
      },
    };
  }

  public postCommentRequest(
    postId: string,
    body: PostPostCommentRequest
  ): ApiRequest {
    return {
      uri: `${this.apiUri}/${postId}/comment`,
      request: {
        ...this.apiService.initWithBody('POST', body),
      },
    };
  }
}
