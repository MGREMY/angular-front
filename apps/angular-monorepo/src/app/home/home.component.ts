import { Component, inject } from '@angular/core';
import { ButtonComponent } from 'flowbite-angular/button';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ButtonComponent],
  template: `
    <h1>ANGULAR-MONOREPO DEMO</h1>
    <flowbite-button (click)="authService.login()">Login</flowbite-button>
    <flowbite-button (click)="authService.logout()">Logout</flowbite-button>
  `,
})
export class HomeComponent {
  protected authService = inject(AuthService);
}
