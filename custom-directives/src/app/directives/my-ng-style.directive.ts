import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myNgStyle]',
})
export class MyNgStyleDirective {
  @Input('myNgStyle') set myNgStyle(styles: { [styleName: string]: string }) {
    for (const styleName in styles) {
      this.renderer.setStyle(
        this.element.nativeElement,
        styleName,
        styles[styleName]
      );
    }
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
