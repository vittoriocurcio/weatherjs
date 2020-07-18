import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello World';
  before = 'before';
  isDarkTheme: Observable<boolean>;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private themeService: ThemeService, private router: Router) {
    this.navLinks = [
      {
          label: 'Home',
          link: './home',
          index: 0
      }, {
          label: 'Current',
          link: './current',
          index: 1
      // }, {
      //     label: 'Third',
      //     link: './third',
      //     index: 2
      },
  ];
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
