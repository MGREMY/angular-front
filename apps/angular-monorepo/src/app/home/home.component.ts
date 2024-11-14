import { Component, inject } from '@angular/core';
import { ButtonComponent } from 'flowbite-angular/button';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/api/post.service';
import { PostGetAllResponse } from '../../models/post/post-get-all.response';
import { arrayKeysToDate, keysToDate } from '../../helpers/date.converter';
import { PostPostResponse } from '../../models/post/post-post.response';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `
    <h1>ANGULAR-MONOREPO DEMO</h1>
    <flowbite-button (click)="authService.login()">Login</flowbite-button>
    <flowbite-button (click)="authService.logout()">Logout</flowbite-button>
    <flowbite-button (click)="loadPosts()">Load posts</flowbite-button>
    <flowbite-button (click)="postPost()">Post posts</flowbite-button>
  `,
})
export class HomeComponent {
  protected readonly authService = inject(AuthService);
  protected readonly postService = inject(PostService);

  public async loadPosts(): Promise<void> {
    const request = this.postService.getAllRequest;

    const response = await fetch(request.uri, request.request)
      .then((value) => value.json() as Promise<PostGetAllResponse[]>)
      .then((value) => arrayKeysToDate(value, 'createdAtUtc'));

    console.group();
    response.forEach((element) => {
      console.group('postId', element.postId);
      console.log('postId : ', element.postId);
      console.log('title : ', element.title);
      console.log('content : ', element.content);
      console.log('createdUserEmail : ', element.createdUserEmail);
      console.log('createdAtUtc : ', element.createdAtUtc);
      console.log('hasBeenModified : ', element.hasBeenModified);
      console.groupEnd();
    });
    console.groupEnd();
  }

  public async postPost(): Promise<void> {
    const request = this.postService.PostRequest({
      title: 'test post',
      content: 'test post content',
    });

    const response = await fetch(request.uri, request.request)
      .then((value) => value.json() as Promise<PostPostResponse>)
      .then((value) => keysToDate(value, 'createdAtUtc'));

    console.group('postId', response.postId);
    console.log('postId : ', response.postId);
    console.log('title : ', response.title);
    console.log('content : ', response.content);
    console.log('createdUserEmail : ', response.createdUserEmail);
    console.log('createdAtUtc : ', response.createdAtUtc);
    console.log('hasBeenModified : ', response.hasBeenModified);
    console.groupEnd();
  }
}
