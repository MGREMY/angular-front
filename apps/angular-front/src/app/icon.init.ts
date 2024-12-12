import { DomSanitizer } from '@angular/platform-browser';
import { IconRegistry } from 'flowbite-angular/icon';

export function initIcons(iconRegistry: IconRegistry, sanitizer: DomSanitizer) {
  return () => {
    iconRegistry.addSvgIcon(
      'flowbite-angular-logo',
      sanitizer.bypassSecurityTrustResourceUrl('/favicon.svg')
    );

    iconRegistry.addSvgIconInNamespace(
      'outline',
      'arrow-left-to-bracket',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/icons/outline/arrow-left-to-bracket.svg'
      )
    );

    iconRegistry.addSvgIconInNamespace(
      'outline',
      'arrow-right-to-bracket',
      sanitizer.bypassSecurityTrustResourceUrl(
        '/icons/outline/arrow-right-to-bracket.svg'
      )
    );
  };
}
