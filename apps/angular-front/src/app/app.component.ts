import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
} from 'flowbite-angular/navbar';
import { DarkThemeToggleComponent } from 'flowbite-angular/dark-theme-toggle';
import { FlowbiteThemeDirective } from 'flowbite-angular/theme';
import { IconComponent } from 'flowbite-angular/icon';
import { FlowbiteRouterLinkDirective } from 'flowbite-angular/router-link';

@Component({
  imports: [
    NavbarComponent,
    NavbarBrandComponent,
    NavbarContentComponent,
    DarkThemeToggleComponent,
    IconComponent,
    FlowbiteRouterLinkDirective,
    RouterOutlet,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  hostDirectives: [FlowbiteThemeDirective],
})
export class AppComponent {}
