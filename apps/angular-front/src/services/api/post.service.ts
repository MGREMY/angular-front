import { inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import { ApiService } from '../api.service';
import {
  defaultPagedRequest,
  PagedRequest,
} from './models/paged-request.model';
import { Post_PostRequest } from './models/post/post.request';
import { Post_PutRequest } from './models/post/put.request';
import { Post_PostCommentRequest } from './models/post/post-comment.request';
import { PagedResponse } from './models/paged-response.model';
import { PostDto } from './models/post.dto';
import { arrayKeysToDate, keysToDate } from '../../helpers/date.converter';
import { CommentDto } from './models/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/post`;

  public getAllPost(
    pagination: PagedRequest = defaultPagedRequest,
    abortSignal?: AbortSignal
  ) {
    return fetch(
      `${this.apiUri}?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}`,
      this.apiService.init('GET', abortSignal)
    )
      .then((response) => response.json() as Promise<PagedResponse<PostDto>>)
      .then((pagedResponse) =>
        arrayKeysToDate(pagedResponse.data, 'createdAtUtc')
      );
  }

  public getPost(postId: string, abortSignal?: AbortSignal) {
    return fetch(
      `${this.apiUri}/${postId}`,
      this.apiService.init('GET', abortSignal)
    )
      .then((response) => response.json() as Promise<PostDto>)
      .then((postDto) => keysToDate(postDto, 'createdAtUtc'));
  }

  public createPost(request: Post_PostRequest, abortSignal?: AbortSignal) {
    return fetch(
      this.apiUri,
      this.apiService.initWithBody('POST', request, abortSignal)
    )
      .then((response) => response.json() as Promise<PostDto>)
      .then((postDto) => keysToDate(postDto, 'createdAtUtc'));
  }

  public updatePost(
    postId: string,
    request: Post_PutRequest,
    abortSignal?: AbortSignal
  ) {
    return fetch(
      `${this.apiUri}/${postId}`,
      this.apiService.initWithBody('PUT', request, abortSignal)
    )
      .then((response) => response.json() as Promise<PostDto>)
      .then((postDto) => keysToDate(postDto, 'createdAtUtc'));
  }

  public deletePost(postId: string, abortSignal?: AbortSignal) {
    return fetch(
      `${this.apiUri}/${postId}`,
      this.apiService.init('DELETE', abortSignal)
    );
  }

  public getAllComments(postId: string, abortSignal?: AbortSignal) {
    return fetch(
      `${this.apiUri}/${postId}/comments`,
      this.apiService.init('GET', abortSignal)
    )
      .then((response) => response.json() as Promise<CommentDto[]>)
      .then((commentDtos) => arrayKeysToDate(commentDtos, 'createdAtUtc'));
  }

  public postComment(
    postId: string,
    request: Post_PostCommentRequest,
    abortSignal?: AbortSignal
  ) {
    return fetch(
      `${this.apiUri}/${postId}/comments`,
      this.apiService.initWithBody('POST', request, abortSignal)
    )
      .then((response) => response.json() as Promise<CommentDto>)
      .then((commentDto) => keysToDate(commentDto, 'createdAtUtc'));
  }

  public getCommentsCount(postId: string, abortSignal?: AbortSignal) {
    return fetch(
      `${this.apiUri}/${postId}/comments/count`,
      this.apiService.init('GET', abortSignal)
    ).then((response) => response.json() as Promise<number>);
  }
}
