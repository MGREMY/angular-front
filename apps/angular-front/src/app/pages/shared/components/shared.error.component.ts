import { Component, model, ResourceRef } from '@angular/core';

@Component({
  selector: 'app-shared-error',
  template: `
    <div class="inline-block">
      <p class="font-bold text-2xl text-red-500">Error</p>
      <p>{{ resource().error() }}</p>
    </div>
  `,
  host: {
    class: 'flex justify-center',
  },
})
export class SharedErrorComponent {
  public resource = model.required<ResourceRef<unknown>>();
}
