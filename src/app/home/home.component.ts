import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { DownloadAppComponent } from './components/download-app/download-app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { JoinTeamComponent } from './components/join-team/join-team.component';
import { ScrollService } from '../shared/services/scroll.service';
import { Subscription } from 'rxjs';
import { IntersectionObserverDirective } from '../shared/directives/intersection-observer.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, DownloadAppComponent, ContactUsComponent, JoinTeamComponent, IntersectionObserverDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  scrollSub$!: Subscription;

  constructor(private _ScrollService: ScrollService){}

  ngOnInit() {
    this.scrollSub$ = this._ScrollService.scrollSubjectObs
    .subscribe((elementId) => {
      this.scrollIntoView(elementId);
    });
  }

  scrollIntoView(elementId: string) {
    const targetElement = document.body.querySelector(`#${elementId}`);
    if (targetElement) {
      const targetElementRect = targetElement.getBoundingClientRect();
      window.scroll({
        behavior: 'smooth',
        top: targetElementRect.top + window.scrollY - 60,
      });
    }
  }

  onVisibilityChange(isVisible: boolean, section: string): void {
    if (isVisible) {
      this._ScrollService.sectionInViewSubject.next(section);
    }
  }

  ngOnDestroy(){
    this.scrollSub$?.unsubscribe();
  }
}
