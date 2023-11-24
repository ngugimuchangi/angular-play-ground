import {
  Directive,
  DoCheck,
  Input,
  NgIterable,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
} from '@angular/core';

/** Context object class definition */
class MyNgForContext<T, U extends NgIterable<T>> {
  constructor(public $implicit: T, public ngForOf: U, public index: number, public count: number) { }
  get first(): boolean {
    return this.index === 0;
  }
  get last(): boolean {
    return this.index === this.count - 1;
  }

  get even(): boolean {
    return !(this.index & 1);
  }

  get odd(): boolean {
    return !this.even;
  }
}

@Directive({
  selector: '[myNgFor][myNgForOf]',
})
export class MyNgForDirective<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {
  /**
   * @description
   * Iterable to loop over
   */
  @Input({ required: true }) myNgForOf!: U;

  /**
   * @description
   * Track by function to track the items in the iterable
   * @param index - index of the item in the iterable
   * @param item - item from the iterable
   * @returns
   */
  @Input()
  myNgForTrackBy: TrackByFunction<T> = (index: number, item: T) => item;

  @Input()
  set myNgForTemplate(value: TemplateRef<MyNgForContext<T, U>>) {
    if (value) {
      this.template = value;
    }
  }

  get myNgForTemplate(): TemplateRef<MyNgForContext<T, U>> {
    return this.template;
  }

  constructor(private viewContainerRef: ViewContainerRef, private template: TemplateRef<MyNgForContext<T, U>>) { }

  ngDoCheck(): void {
    this.viewContainerRef.clear();
    let index = 0;
    for (const item of this.myNgForOf) {
      const context = new MyNgForContext<T, U>(item, this.myNgForOf, index, ++index);
      this.viewContainerRef.createEmbeddedView(this.myNgForTemplate, context);
    }
  }
}
