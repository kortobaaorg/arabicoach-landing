import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private _ScrollService: ScrollService, private router: Router) {}

  scrollToSection(sectionId: string) {
    this.router.navigateByUrl('')
    setTimeout(() => {
      this._ScrollService.sendScrollEvent(sectionId);
    }, 500);
  }
}
