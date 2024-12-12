import { DomSanitizer } from '@angular/platform-browser';
import { IconRegistry } from 'flowbite-angular/icon';

export function initIcons(iconRegistry: IconRegistry, sanitizer: DomSanitizer) {
  return () => {
    iconRegistry.addSvgIcon(
      'flowbite-angular-logo',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/favicon.svg'
      )
    );
  };
}
