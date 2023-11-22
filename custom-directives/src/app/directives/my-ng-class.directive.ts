import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[myNgClass]',
  exportAs: 'myNgClass',
})
export class MyNgClassDirective implements DoCheck {
  private _classes: Record<string, boolean> = {};

  @Input('myNgClass') set classes(classes: Record<string, boolean>) {
    this._classes = classes;
    this.setClass(classes);
  }

  get classes() {
    return this._classes;
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngDoCheck() {
    this.setClass(this.classes);
  }

  /**
   * @description
   * Add or remove classes based on the condition
   * @param classes - classes to be added or removed
   */
  setClass(classes: Record<string, boolean>) {
    for (const className in classes) {
      if (this.classes[className]) {
        this.renderer.addClass(this.element.nativeElement, className);
      } else {
        this.renderer.removeClass(this.element.nativeElement, className);
      }
    }
  }
}
