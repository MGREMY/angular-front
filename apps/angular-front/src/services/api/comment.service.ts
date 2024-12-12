import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import {
  defaultPagedRequest,
  PagedRequest,
} from './models/paged-request.model';
import { Comment_PutRequest } from './models/comment/put.request';
import { PagedResponse } from './models/paged-response.model';
import { CommentDto } from './models/comment.dto';
import { arrayKeysToDate, keysToDate } from '../../helpers/date.converter';

@Injectable({ providedIn: 'root' })
export class CommentService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/comment`;

  public getAllComment(pagination: PagedRequest = defaultPagedRequest) {
    return fetch(
      `${this.apiUri}?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}`,
      this.apiService.init('GET')
    )
      .then((response) => response.json() as Promise<PagedResponse<CommentDto>>)
      .then((pagedResponse) =>
        arrayKeysToDate(pagedResponse.data, 'createdAtUtc')
      );
  }

  public getComment(commentId: string) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.init('GET')
    )
      .then((response) => response.json() as Promise<CommentDto>)
      .then((commentDto) => keysToDate(commentDto, 'createdAtUtc'));
  }

  public updateComment(commentId: string, request: Comment_PutRequest) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.initWithBody('PUT', request)
    )
      .then((response) => response.json() as Promise<CommentDto>)
      .then((commentDto) => keysToDate(commentDto, 'createdAtUtc'));
  }

  public deleteComment(commentId: string) {
    return fetch(
      `${this.apiUri}/commentId=${commentId}`,
      this.apiService.init('DELETE')
    );
  }
}
