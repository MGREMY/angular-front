import { Component, inject } from '@angular/core';
import { ButtonComponent } from 'flowbite-angular/button';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/api/post.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `
    <h1>ANGULAR-MONOREPO DEMO</h1>
    <flowbite-button (click)="authService.login()">Login</flowbite-button>
    <flowbite-button (click)="authService.logout()">Logout</flowbite-button>
    <flowbite-button (click)="loadPosts()">Load posts</flowbite-button>
  `,
})
export class HomeComponent {
  protected readonly authService = inject(AuthService);
  protected readonly postService = inject(PostService);

  public loadPosts(): void {
    this.postService.getAll().subscribe((result) => console.log(result));
  }
}
