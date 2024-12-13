import { Routes } from '@angular/router';
import { PostListComponent } from './post-list.component';
import { PostDetailComponent } from './details/post-detail.component';

export default [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: ':postId',
    component: PostDetailComponent,
  },
] as Routes;
