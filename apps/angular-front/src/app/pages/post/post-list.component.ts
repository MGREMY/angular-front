import { Component, inject, resource } from '@angular/core';
import { PostService } from '../../../services/api/post.service';
import { SharedPostDetailMinimizedComponent } from '../shared/components/post/shared.post-detail-minimize.component';
import { SharedLoadingComponent } from "../shared/components/shared.loading.component";
import { SharedErrorComponent } from "../shared/components/shared.error.component";

@Component({
  selector: 'app-post-list',
  imports: [SharedPostDetailMinimizedComponent, SharedLoadingComponent, SharedErrorComponent],
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  private readonly postService = inject(PostService);

  protected readonly postListResource = resource({
    loader: ({ abortSignal }) =>
      this.postService.getAllPost(undefined, abortSignal),
  });
}
