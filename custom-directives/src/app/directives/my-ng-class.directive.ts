import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myNgClass]',
})
export class MyNgClassDirective {
  @Input('myNgClass') set myNgClass(classes: { [className: string]: boolean }) {
    for (const className in classes) {
      if (classes[className]) {
        this.renderer.addClass(this.element.nativeElement, className);
      } else {
        this.renderer.removeClass(this.element.nativeElement, className);
      }
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}
}
