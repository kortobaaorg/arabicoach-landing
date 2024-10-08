import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JoinTeamComponent } from './components/join-team/join-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, DownloadAppComponent, ContactUsComponent, JoinTeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
