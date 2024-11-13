import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
} from 'flowbite-angular/navbar';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  imports: [
    NavbarComponent,
    NavbarBrandComponent,
    NavbarContentComponent,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);

  public ngOnInit(): void {
    console.log(this.authService.accessToken);
  }
}
