import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NavbarBrandComponent,
  NavbarComponent,
  NavbarContentComponent,
} from 'flowbite-angular/navbar';

@Component({
    imports: [
        NavbarComponent,
        NavbarBrandComponent,
        NavbarContentComponent,
        RouterOutlet,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {}
