import { Component, OnInit, Input, Renderer2, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  private renderer: Renderer2;

  constructor(private factory: RendererFactory2) {
    this.renderer = factory.createRenderer(null, null)
  }

  @Input() on: boolean;

  onClick() {
    if (!this.on) {
      this.renderer.addClass(document.body, "dark-mode")
    }
    else {
      this.renderer.removeClass(document.body, "dark-mode")
    }
  }

  ngOnInit(): void {
  }

}
