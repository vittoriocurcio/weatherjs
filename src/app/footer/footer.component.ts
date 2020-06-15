import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef, MatBottomSheetConfig, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(page: string): void {
    var config = new MatBottomSheetConfig()
    config.data = page
    switch (page) {
      case 'about':
        this._bottomSheet.open(AboutBottom, config);
        break;
        case 'impressum':
          this._bottomSheet.open(ImpressumBottom, config);
          break;
    }
   
  }
}
@Component({
  selector: 'app-about',
  templateUrl: 'about.html',
})
export class AboutBottom {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {
    console.log(this.data)
  }

}
@Component({
  selector: 'app-impressum',
  templateUrl: 'impressum.html',
})
export class ImpressumBottom {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {
    console.log(this.data)
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {
    console.log(this.data)
  }

}