import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();
  scrollSubjectObs = this.scrollSubject.asObservable();

  sectionInViewSubject = new BehaviorSubject<string>('aboutSection');
  sectionInViewSubjectObs = this.sectionInViewSubject.asObservable();

  sendScrollEvent(elementId: string) {
    this.scrollSubject.next(elementId);
  }
}
