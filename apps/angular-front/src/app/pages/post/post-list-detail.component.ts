import { DatePipe } from '@angular/common';
import { Component, inject, model, resource } from '@angular/core';
import { PostDto } from '../../../services/api/models/post.dto';
import { PostService } from '../../../services/api/post.service';
import { IconComponent } from 'flowbite-angular/icon';

@Component({
  selector: 'app-post-list-details',
  imports: [DatePipe, IconComponent],
  template: `
    <div class="p-2 border border-gray-300 dark:border-gray-600 bg-slate-100 dark:bg-gray-800 rounded-xl">
      <div class="flex flex-col m-2">
        <div class="flex flex-col md:flex-row justify-between pb-4 md:gap-2">
          <p class="text-2xl font-bold">
            {{ post().title }}
          </p>
          <div class="inline-flex items-center gap-2">
            <span>
              {{ post().createdUserEmail }}
            </span>
            <img
              src="https://placehold.co/48x48"
              alt="user profile picture"
              class="hidden md:block w-12 h-12" />
          </div>
        </div>
        <div class="pb-8">
          <p>
            {{ post().content }}
          </p>
        </div>
        <div class="flex flex-row justify-between">
          <span class="text-sm italic">
            {{ post().createdAtUtc | date : 'medium' }}
          </span>
          <span class="inline-flex items-center gap-2">
            <flowbite-icon
              svgIcon="outline:message-dots"
              class="w-5 h-5 block stroke-2" />
            @if (commentCount.hasValue()){
            {{ commentCount.value() }}
            }
          </span>
        </div>
      </div>
    </div>
  `,
})
export class PostListDetailsComponent {
  public readonly post = model.required<PostDto>();

  protected readonly postService = inject(PostService);

  protected commentCount = resource({
    request: () => ({ postId: this.post().postId }),
    loader: ({ request, abortSignal }) =>
      this.postService.getCommentsCount(request.postId, abortSignal),
  });
}
