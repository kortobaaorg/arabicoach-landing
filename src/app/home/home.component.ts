import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, DownloadAppComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
