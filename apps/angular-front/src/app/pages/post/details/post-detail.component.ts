import { Component, inject, model, resource } from '@angular/core';
import { PostService } from '../../../../services/api/post.service';
import { SharedPostDetailComponent } from '../../shared/components/post/shared.post-detail.component';
import { SharedLoadingComponent } from "../../shared/components/shared.loading.component";
import { SharedErrorComponent } from "../../shared/components/shared.error.component";
import { SharedCommentDetailComponent } from "../../shared/components/comment/shared.comment-detail.component";

@Component({
  selector: 'app-post-detail',
  imports: [SharedPostDetailComponent, SharedLoadingComponent, SharedErrorComponent, SharedCommentDetailComponent],
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent {
  public postId = model.required<string>();

  protected readonly postService = inject(PostService);

  protected readonly postResource = resource({
    request: () => ({ postId: this.postId() }),
    loader: ({ request, abortSignal }) =>
      this.postService.getPost(request.postId, abortSignal),
  });

  protected readonly commentsResource = resource({
    request: () => ({ postId: this.postId() }),
    loader: ({ request, abortSignal }) =>
      this.postService.getAllComments(request.postId, abortSignal),
  });
}
