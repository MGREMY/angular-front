import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import {
  defaultPagedRequest,
  PagedRequest,
} from './models/paged-request.model';
import { Comment_PutRequest } from './models/Comment/put.request';

@Injectable({ providedIn: 'root' })
export class CommentService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/comment`;

  public getAllComment(pagination: PagedRequest = defaultPagedRequest) {
    return fetch(
      `${this.apiUri}?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}`,
      this.apiService.init('GET')
    );
  }

  public getComment(commentId: string) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.init('GET')
    );
  }

  public updateComment(commentId: string, request: Comment_PutRequest) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.initWithBody('PUT', request)
    );
  }

  public deleteComment(commentId: string) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.init('DELETE')
    );
  }
}
