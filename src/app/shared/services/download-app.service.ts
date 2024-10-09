import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DownloadAppService {
  constructor(private platform: Platform, private router: Router) {
    if (this.platform.isBrowser) {
      this.router.events.subscribe({
        next: (r) => {
          if (r instanceof NavigationStart) {
          }
        },
      });
    }
  }

  downloadApp() {
    if (this.platform.isBrowser) {
      if (this.platform.IOS && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
        // window.open(environment.APP_STORE_URL);
        window.location.replace(environment.APP_STORE_URL);
      } else if (navigator.userAgent.includes('huawei')) {
        // window.open(environment.HUAWEI_STORE_URL);
        window.location.replace(environment.HUAWEI_STORE_URL);
      } else {
        // window.open(environment.PLAY_STORE_URL);
        window.location.replace(environment.GOOGLE_PLAY_URL);
      }
    }
  }
}
