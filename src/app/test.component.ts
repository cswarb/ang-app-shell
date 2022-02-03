import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WindowRef } from './window.service';

@Component({
  selector: 'test-component',
  template: `<p>test</p>`,
})
export class TestComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef
  ) {
    // if (isPlatformBrowser(this.platformId)) {
      console.log(window.location);
    // };
  }
  
}
