import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ThemeService {
  private darkTheme: BehaviorSubject<boolean>;
  isDarkTheme: Observable<boolean>;

  setDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme.next(isDarkTheme);
    localStorage.setItem('dark-mode', String(isDarkTheme).toString());
  }

  constructor() {
    this.darkTheme = new BehaviorSubject<boolean>(this.isDarkModeEnabled());
    this.isDarkTheme = this.darkTheme.asObservable();
  }

  private isDarkModeEnabled(): boolean {
    if (localStorage.getItem('dark-mode') === 'true') {
      return true;
    }
    return false;
  }

}
