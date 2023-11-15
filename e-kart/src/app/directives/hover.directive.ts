import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  @HostBinding('style.background') backgroundColor: string = 'white';
  @HostBinding('style.border') border: string = '#282828 2px solid';
  @HostBinding('style.color') textColor: string = '#282828';

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = '#282828';
    this.textColor = 'white';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'white';
    this.textColor = '#282828';
  }
}
