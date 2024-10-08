import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

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
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe({
      next: (r) => {
        if (r instanceof NavigationEnd) {
          const currentRoute = this.router.url;
          if( currentRoute === '/termsAndConditions' || currentRoute === '/privacyPolicy'){
            this.changeNavBg = true;
          }else{
            this.changeNavBg = false
          }
        }
      },
    });
  }

  scrollToSection(sectionId: string) {
    // this.router.navigateByUrl('home')
    // setTimeout(() => {
    //   this._ScrollService.sendScrollEvent(sectionId);
    // }, 500);
    // this.menuVisible = false;
  }

  closeMenu() {
    this.menuVisible = false;
    window.scroll(0, 0);
  }
}
