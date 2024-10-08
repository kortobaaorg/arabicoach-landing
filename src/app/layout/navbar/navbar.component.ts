import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ScrollService } from '../../shared/services/scroll.service';
import { PlatformService } from '../../shared/services/platform.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuVisible: boolean = false;
  changeNavBg: boolean = false;

  activeSection!: string;
  constructor(private _ScrollService: ScrollService, private router: Router, private platform: PlatformService) {}

  ngOnInit() {
    if(this.platform.isBrowser){
      this.router.events.subscribe({
        next: (r) => {
          if (r instanceof NavigationEnd) {
            const currentRoute = this.router.url;
            if( currentRoute === '/termsAndConditions' || currentRoute === '/privacyPolicy'){
              this.changeNavBg = true;
            }else{
              this.changeNavBg = false
            }
            window.scroll(0, 0);
          }
        },
      });
      this._ScrollService.sectionInViewSubjectObs.subscribe((elementId) => {
        this.activeSection = elementId;
      });
    }
  }

  scrollToSection(sectionId: string) {
    this.router.navigateByUrl('')
    setTimeout(() => {
      this._ScrollService.sendScrollEvent(sectionId);
    }, 500);
    this.menuVisible = false;
  }

  closeMenu() {
    this.menuVisible = false;
    // window.scroll(0, 0);
  }
}
