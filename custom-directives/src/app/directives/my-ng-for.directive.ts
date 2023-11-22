import {
  Directive,
  Input,
  NgIterable,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
} from '@angular/core';

/** Context object class definition */
class MyNgForContext {
  constructor(
    public $implicit: any,
    public index: number,
    public count: number
  ) {}

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
export class MyNgForDirective<T, U extends NgIterable<T>> {
  /**
   * @description
   * Iterable to loop over
   */
  @Input({ alias: 'myNgForOf', required: true }) myNgForOf!: U;

  /**
   * @description
   * Track by function to track the items in the iterable
   * @param index - index of the item in the iterable
   * @param item - item from the iterable
   * @returns
   */
  @Input('myNgForTrackBy')
  myNgForTrackBy: TrackByFunction<T> = (index: number, item: T) => item;

  constructor(
    private viewContainerRef: ViewContainerRef,
    template: TemplateRef<MyNgForContext>
  ) {}
}
