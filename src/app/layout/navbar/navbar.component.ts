import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuVisible: boolean = false;

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
