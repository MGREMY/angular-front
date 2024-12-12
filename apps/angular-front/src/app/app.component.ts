import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
  NavbarIconButtonComponent,
  NavbarItemComponent,
} from 'flowbite-angular/navbar';
import { DarkThemeToggleComponent } from 'flowbite-angular/dark-theme-toggle';
import { FlowbiteThemeDirective } from 'flowbite-angular/theme';
import { IconComponent } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';
import { FlowbiteRouterLinkActiveDirective } from 'flowbite-angular/router-link-active';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [
    NavbarComponent,
    NavbarBrandComponent,
    NavbarContentComponent,
    NavbarItemComponent,
    NavbarIconButtonComponent,
    DarkThemeToggleComponent,
    IconComponent,
    FlowbiteRouterLinkDirective,
    FlowbiteRouterLinkActiveDirective,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  hostDirectives: [FlowbiteThemeDirective],
})
export class AppComponent {
  protected readonly authService = inject(AuthService);
}
