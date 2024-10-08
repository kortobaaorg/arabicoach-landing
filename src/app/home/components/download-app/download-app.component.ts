import { Component } from '@angular/core';

@Component({
  selector: 'app-download-app',
  standalone: true,
  imports: [],
  templateUrl: './download-app.component.html',
  styleUrl: './download-app.component.scss'
})
export class DownloadAppComponent {
  downloadApp(store: string) {
    // if (store === 'appStore') {
    //   // window.open(environment.APP_STORE_URL);
    //   window.location.replace(environment.APP_STORE_URL);
    // } else if (store === 'playStore') {
    //   // window.open(environment.PLAY_STORE_URL);
    //   window.location.replace(environment.PLAY_STORE_URL);
    // }
  }
}
