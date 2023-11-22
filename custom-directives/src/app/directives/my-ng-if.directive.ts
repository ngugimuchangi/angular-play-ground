import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

/**
 * @description
 * Simple implementation of ngIf directive
 * @example
 * <div *myNgIf="condition; else altView">Main View</div>
 */
@Directive({
  selector: '[myNgIf]',
})
export class MyNgIfDirective implements OnChanges {
  // To keep track of the current view and prevent unnecessary view creation
  currView?: 'main' | 'alt';

  @Input('myNgIf')
  display: boolean = false;

  @Input('myNgIfElse')
  altView: TemplateRef<any> | null = null;

  constructor(
    private readonly template: TemplateRef<unknown>,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  /** Create view based on condition and current view */
  ngOnChanges() {
    if (this.display && this.currView !== 'main')
      this.createEmbeddedView(this.template);

    if (!this.display && this.altView && this.currView !== 'alt')
      this.createEmbeddedView(this.altView);
  }

  /** Create embedded view and set current view */
  createEmbeddedView(templateRef: TemplateRef<any>): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(templateRef);
    this.currView = templateRef === this.template ? 'main' : 'alt';
  }
}
