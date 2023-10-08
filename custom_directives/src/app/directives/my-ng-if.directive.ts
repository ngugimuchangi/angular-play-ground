import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myNgIf]',
})
export class MyNgIfDirective {
  @Input('myNgIf') set display(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view);
    } else {
      this.template.clear();
    }
  }

  constructor(
    private view: TemplateRef<unknown>,
    private template: ViewContainerRef
  ) {}
}
