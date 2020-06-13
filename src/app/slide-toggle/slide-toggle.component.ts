import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Input() on: boolean;

  constructor() {}
  onClick() {
    this.toggle.emit(this.on);
  }

  ngOnInit(): void {

  }

}
