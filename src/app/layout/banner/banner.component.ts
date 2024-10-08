import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isVisible: boolean = false;

  constructor() {}

  // download app
  downloadApp() {
    // this._appStore.downloadApp();
  }
}
