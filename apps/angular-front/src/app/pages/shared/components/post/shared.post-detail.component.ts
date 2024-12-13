import { Component, inject, model, resource } from '@angular/core';
import { PostDto } from '../../../../../services/api/models/post.dto';
import { PostService } from '../../../../../services/api/post.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shared-post-detail',
  imports: [DatePipe],
  template: `
    <div class="flex flex-col m-2">
      <div class="flex flex-col md:flex-row justify-between pb-4 md:gap-2">
        <p class="text-2xl font-bold">
          {{ post().title }}
        </p>
      </div>
      <div class="pb-8">
        <p>
          {{ post().content }}
        </p>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col items-start gap-2">
          <img
            src="https://placehold.co/48x48"
            alt="user profile picture"
            class="w-12 h-12" />
          <span>
            {{ post().createdUserEmail }}
          </span>
        </div>
        <div class="flex flex-row items-end">
          <span class="text-sm italic">
            {{ post().createdAtUtc | date : 'medium' }}
          </span>
          @if(post().hasBeenModified){
          <span class="text-sm italic">modified</span>
          }
        </div>
      </div>
    </div>
  `,
})
export class SharedPostDetailComponent {
  public post = model.required<PostDto>();

  protected readonly postService = inject(PostService);

  protected readonly postResource = resource({
    request: () => ({ postId: this.post().postId }),
    loader: ({ request, abortSignal }) =>
      this.postService.getAllComments(request.postId, abortSignal),
  });
}
