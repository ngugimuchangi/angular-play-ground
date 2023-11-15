import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disableProduct]',
})
export class DisableProductDirective implements OnInit {
  disabledStyles = { opacity: 0.5, background: '#282828' };

  @Input() set disableProduct(disable: boolean) {
    if (disable) {
      for (const style in this.disabledStyles) {
        this.renderer.setStyle(
          this.element.nativeElement,
          style,
          this.disabledStyles[style]
        );
      }
    }
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}
