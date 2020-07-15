import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MatBottomSheetConfig, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(page: string): void {
    const config = new MatBottomSheetConfig();
    config.data = page;
    switch (page) {
      case 'about':
        this.bottomSheet.open(AboutBottom, config);
        break;
      case 'impressum':
        window.open("../impressum.html  ")
        break;
    }

  }
}
@Component({
  selector: 'app-about',
  templateUrl: 'about.html',
})
export class AboutBottom {
  constructor(private bottomSheetRef: MatBottomSheetRef<AboutBottom>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {
    console.log(this.data);
  }

}
