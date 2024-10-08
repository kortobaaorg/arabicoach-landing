import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { PlatformService } from '../services/platform.service';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() root: HTMLElement | null = null;
  @Input() rootMargin: string = '0px';
  @Input() threshold: number | number[] = 0.15; // Default to 10% visibility
  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef, private platform: PlatformService) {}

  ngOnInit() {
    if(this.platform.isBrowser){
      this.initObserver();
    }
  }

  private initObserver(): void {
    const options = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => this.visibilityChange.emit(entry.isIntersecting));
    }, options);

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
