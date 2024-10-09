import { Component, HostListener, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './layout/banner/banner.component';
import { SEOService } from './shared/services/seo.service';
import { Location } from '@angular/common';
import { PlatformService } from './shared/services/platform.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'arabicoach';
  seoService = inject(SEOService);
  platform = inject(PlatformService);
  location = inject(Location);

  windowScrolled: boolean = false;

  constructor() {
    this.addTitleAndTags();
  }

  ngOnInit(): void {
    if (this.platform.isBrowser) {
      let script = document.createElement('script');
      script.type = `application/ld+json`;
      script.text = `
      {
        "@context" : "https://schema.org",
        "@type" : "WebSite",
        "name" : "arabicoach",
        "alternateName" : "arabicoach",
        "url" : ${environment.webSite},
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": ${environment.webSite}
          },
          "query-input": "required name=arabicoach"
        }
      }
      `;
      document.head.append(script);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.scrollY) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  addTitleAndTags() {
    this.seoService.setPageTitle('arabicoach');
    this.seoService.addPageTags([
      {
        name: 'og:image',
        content: '../assets/images/hero.webp',
      },
      {
        name: 'twitter:image',
        content: '../assets/images/hero.webp',
      },
      {
        name: 'description',
        content:
          'Book customized lessons with licensed Arabic coaches and attain Arabic fluency-all in one seamless app.',
      },
      {
        name: 'og:description',
        content:
          'Book customized lessons with licensed Arabic coaches and attain Arabic fluency-all in one seamless app.',
      },
      {
        name: 'og:title',
        content: 'arabicoach',
      },
      {
        name: 'twitter:description',
        content:
          'Book customized lessons with licensed Arabic coaches and attain Arabic fluency-all in one seamless app.',
      },
      {
        name: 'twitter:title',
        content: 'arabicoach',
      },
      {
        name: 'title',
        content: 'arabicoach',
      },
      {
        name: 'description',
        content:
          'Book customized lessons with licensed Arabic coaches and attain Arabic fluency-all in one seamless app.',
      },
      {
        name: 'og:locale',
        content: 'en_US',
      },
      {
        name: 'og:locale:alternate',
        content: 'en_US',
      },
      {
        name: 'og:url',
        content: this.location.prepareExternalUrl('/'),
      },
      {
        name: 'og:site_name',
        content: 'arabicoach',
      },
      {
        name: 'og:type',
        content: 'website',
      },
    ]);
    this.seoService.addCanonicalURL();
  }
}
