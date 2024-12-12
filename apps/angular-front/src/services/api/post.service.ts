import { inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../config/api.config';
import { ApiService } from '../api.service';
import {
  defaultPagedRequest,
  PagedRequest,
} from './models/paged-request.model';
import { Post_PostRequest } from './models/Post/post.request';
import { Post_PutRequest } from './models/Post/put.request';
import { Post_PostCommentRequest } from './models/Post/post-comment.request';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  protected readonly apiService = inject(ApiService);
  protected readonly apiUri = `${inject(API_CONFIG_TOKEN).apiUri}/post`;

  public getAllPost(pagination: PagedRequest = defaultPagedRequest) {
    return fetch(
      `${this.apiUri}?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}`,
      this.apiService.init('GET')
    );
  }

  public getPost(postId: string) {
    return fetch(
      `${this.apiUri}/postId=${postId}`,
      this.apiService.init('GET')
    );
  }

  public createPost(request: Post_PostRequest) {
    return fetch(this.apiUri, this.apiService.initWithBody('POST', request));
  }

  public updatePost(postId: string, request: Post_PutRequest) {
    return fetch(
      `${this.apiUri}/postId=${postId}`,
      this.apiService.initWithBody('PUT', request)
    );
  }

  public deletePost(postId: string) {
    return fetch(
      `${this.apiUri}/postId=${postId}`,
      this.apiService.init('DELETE')
    );
  }

  public getAllComments(postId: string) {
    return fetch(
      `${this.apiUri}/postId=${postId}/comments`,
      this.apiService.init('GET')
    );
  }

  public postComment(postId: string, request: Post_PostCommentRequest) {
    return fetch(
      `${this.apiUri}/postId=${postId}/comments`,
      this.apiService.initWithBody('POST', request)
    );
  }
}
