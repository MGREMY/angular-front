import { Component, inject, resource } from '@angular/core';
import { PostService } from '../../../services/api/post.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [DatePipe],
  template: `
    <div class="flex flex-row">
      @if(postListResource.isLoading()){
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      } @else if (postListResource.hasValue()){
      <table
        class="table-auto w-1/2 mx-auto h-fit border border-gray-300 dark:border-gray-600">
        <caption class="caption-top font-bold">
          Posts
        </caption>
        <thead class="bg-slate-200 dark:bg-gray-800">
          <tr>
            <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Title
            </th>
            <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              User
            </th>
            <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Creation date
            </th>
          </tr>
        </thead>
        <tbody class="text-center">
          @for (post of postListResource.value(); track $index) {
          <tr>
            <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              {{ post.title }}
            </td>
            <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              {{ post.createdUserEmail }}
            </td>
            <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">
              {{ post.createdAtUtc | date : 'medium' }}
            </td>
          </tr>
          }
        </tbody>
      </table>
      }
    </div>
  `,
})
export class PostListComponent {
  private readonly postService = inject(PostService);

  protected readonly postListResource = resource({
    loader: ({ abortSignal }) =>
      this.postService.getAllPost(undefined, abortSignal),
  });
}
