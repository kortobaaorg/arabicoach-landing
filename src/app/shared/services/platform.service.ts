import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  isScrolled = new BehaviorSubject<boolean>(true);
  isScrolledObs = this.isScrolled.asObservable();
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  get isMobile() {
    return this.isBrowser
      ? document.documentElement.clientWidth <= 768
        ? true
        : false
      : false;
  }
}
