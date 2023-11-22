import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[myNgStyle]',
})
export class MyNgStyleDirective implements OnInit, DoCheck {
  private _styles: Record<string, string> = {};
  private _oldStyles: Record<string, string> = {};
  private _firstChange = true;

  @Input('myNgStyle') set styles(styles: Record<string, string>) {
    this._styles = styles;
  }
  get styles() {
    return this._styles;
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setOrRemoveStyles(this._styles);
    this._firstChange = false;
  }

  ngDoCheck() {
    if (!this._firstChange) this.setOrRemoveStyles(this.styles);
  }

  /**
   * @description
   * This method sets or removes css styles provided
   * Old styles are removed and new styles are set
   * @param styles - styles to be set or removed
   */
  setOrRemoveStyles(styles: Record<string, string>) {
    // Set styles that are present in the new styles
    for (const styleName in styles) {
      if (
        !this._oldStyles[styleName] ||
        (this._oldStyles[styleName] &&
          this._oldStyles[styleName] !== styles[styleName])
      ) {
        this.renderer.setStyle(
          this.element.nativeElement,
          styleName,
          styles[styleName]
        );
      }
    }

    // Remove styles that are not present in the new styles
    for (const styleName in this._oldStyles) {
      if (!styles[styleName]) {
        this.renderer.removeStyle(this.element.nativeElement, styleName);
      }
    }

    this._oldStyles = { ...this.styles };
  }
}
