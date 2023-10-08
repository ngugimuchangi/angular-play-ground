import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  styles: { [propName: string]: string } = {
    backgroundColor: '#36454f',
    color: 'white',
  };

  @Input('setBackground') backgroundColor: string = '#36454f';
  @Input() textColor: string = 'white';

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // for (const style in this.styles) {
    //   this.renderer.setStyle(
    //     this.element.nativeElement,
    //     style,
    //     this.styles[style]
    //   );
    // }
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.backgroundColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
  }
}
