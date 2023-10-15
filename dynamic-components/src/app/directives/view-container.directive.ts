import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[viewContainer]',
})
export class viewContainerDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
