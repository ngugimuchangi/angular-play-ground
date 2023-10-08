import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class Highlight implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }
}
