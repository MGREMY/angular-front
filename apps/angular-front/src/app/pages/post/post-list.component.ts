import { Component, inject, resource } from '@angular/core';
import { PostService } from '../../../services/api/post.service';
import { PostListDetailsComponent } from './post-list-detail.component';

@Component({
  selector: 'app-post-list',
  imports: [PostListDetailsComponent],
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  private readonly postService = inject(PostService);

  protected readonly postListResource = resource({
    loader: ({ abortSignal }) =>
      this.postService.getAllPost(undefined, abortSignal),
  });
}
