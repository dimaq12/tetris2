import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span>Page not Found</span>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }
  `,
  ],
})
export class NotFoundPageComponent {}