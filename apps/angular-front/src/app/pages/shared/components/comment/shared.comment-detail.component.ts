import { DatePipe } from '@angular/common';
import { Component, model } from '@angular/core';
import { CommentDto } from '../../../../../services/api/models/comment.dto';

@Component({
  selector: 'app-shared-comment-detail',
  imports: [DatePipe],
  template: `
    <div class="flex flex-col m-2">
      <div class="pb-8">
        <p>
          {{ comment().content }}
        </p>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col items-start gap-2">
          <img
            src="https://placehold.co/48x48"
            alt="user profile picture"
            class="w-12 h-12" />
          <span>
            {{ comment().createdUserEmail }}
          </span>
        </div>
        <div class="flex flex-col md:flex-row items-end">
          <span class="text-sm italic">
            {{ comment().createdAtUtc | date : 'medium' }}
          </span>
          @if(comment().hasBeenModified){
          <span class="text-sm italic">modified</span>
          }
        </div>
      </div>
    </div>
  `,
})
export class SharedCommentDetailComponent {
  public readonly comment = model.required<CommentDto>();
}
