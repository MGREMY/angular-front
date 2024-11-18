import { inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from 'apps/angular-front/config/api.config';
import { ApiService } from '../api.service';
import { ApiRequest } from '../../models/api-request';
import { CommentPutRequest } from '../../models/comment/put';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/comment`;

  public getAllRequest(): ApiRequest {
    return {
      uri: this.apiUri,
      request: {
        ...this.apiService.init('GET'),
      },
    };
  }

  public getRequest(commentId: string): ApiRequest {
    return {
      uri: `${this.apiUri}/${commentId}`,
      request: {
        ...this.apiService.init('GET'),
      },
    };
  }

  public putRequest(commentId: string, body: CommentPutRequest): ApiRequest {
    return {
      uri: `${this.apiUri}/${commentId}`,
      request: {
        ...this.apiService.initWithBody('PUT', body),
      },
    };
  }

  public deleteRequest(commentId: string): ApiRequest {
    return {
      uri: `${this.apiUri}/${commentId}`,
      request: {
        ...this.apiService.init('DELETE'),
      },
    };
  }
}
