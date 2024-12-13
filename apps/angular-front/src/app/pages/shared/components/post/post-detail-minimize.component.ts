import { DatePipe } from '@angular/common';
import { Component, inject, model, resource } from '@angular/core';
import { TruncatePipeTransform } from '../../pipes/truncate.pipe';
import { IconComponent } from 'flowbite-angular/icon';
import { RouterLink } from '@angular/router';
import { PostDto } from '../../../../../services/api/models/post.dto';
import { PostService } from '../../../../..//services/api/post.service';

@Component({
  selector: 'app-post-detail-minimized',
  imports: [DatePipe, TruncatePipeTransform, IconComponent, RouterLink],
  template: `
    <div class="flex flex-col m-2">
      <div class="flex flex-col md:flex-row justify-between pb-4 md:gap-2">
        <a [routerLink]="['./', post().postId]" class="text-2xl font-bold">
          {{ post().title }}
        </a>
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
          {{ post().content | truncatePipe }}
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
  `,
})
export class PostDetailMinimizedComponent {
  public readonly post = model.required<PostDto>();

  protected readonly postService = inject(PostService);

  protected commentCount = resource({
    request: () => ({ postId: this.post().postId }),
    loader: ({ request, abortSignal }) =>
      this.postService.getCommentsCount(request.postId, abortSignal),
  });
}
