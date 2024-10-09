import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private _ScrollService: ScrollService, private router: Router){}

  scrollToSection(sectionId: string) {
    this.router.navigateByUrl('')
    setTimeout(() => {
      this._ScrollService.sendScrollEvent(sectionId);
    }, 500);
  }
}
