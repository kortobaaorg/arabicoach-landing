import { Component } from '@angular/core';
import { DownloadAppService } from '../../shared/services/download-app.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  isVisible: boolean = false;

  constructor(private _DownloadAppService: DownloadAppService) {}

  // download app
  downloadApp() {
    this._DownloadAppService.downloadApp();
  }
}
