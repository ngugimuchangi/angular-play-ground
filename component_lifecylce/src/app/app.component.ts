/**
 * NB: Logs are in the order of the lifecycle hooks. They are key in tracing the lifecycle of
 * the component and its children
 *
 * Observation so far:
 * - Child components are initialized after the parent component
 * - View children are initialized after the content children
 *
 * Key thing to remember: `@ViewChild` and `@ContentChild` are available in the ngAfterViewInit
 * and ngAfterContentInit hooks respectively
 *
 * Therefore, the children components are available in the `ngAfterViewInit` and
 * `ngAfterContentInit` hooks of the parent component
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'component lifecycle';
  inputVal: string = 'Initial val';
  toDestroy: boolean = false;
  @ViewChild('demo', {
    static: false,
  })
  demoComponent?: DemoComponent;

  @ViewChild(DemoComponent, {
    read: ElementRef,
    static: false,
  })
  demoComponentEl?: ElementRef;

  ngOnInit(): void {
    console.log('%cAppComponent ngOnInit', 'color: salmon');
  }

  ngDoCheck(): void {
    console.log('%cAppComponent ngDoCheck', 'color: salmon');
  }

  ngAfterContentInit(): void {
    console.log('%cAppComponent ngAfterContentInit', 'color: salmon');
    this.inputVal = 'Hello';
  }

  ngAfterContentChecked(): void {
    console.log('%cAppComponent ngAfterContentChecked', 'color: salmon');
  }

  ngAfterViewInit(): void {
    console.log('%cAppComponent ngAfterViewInit', 'color: salmon');
    console.log(
      '%cLogging type of demo component. this.demoComponent is instance of DemoComponent? %s',
      'color: salmon',
      this.demoComponent instanceof DemoComponent
    );
  }

  ngAfterViewChecked(): void {
    console.log('%cAppComponent ngAfterViewChecked', 'color: salmon');
    console.log(
      '%cDemo component message value: %s',
      'color: salmon',
      this.demoComponent?.message
    );
    console.log(
      '%cDemoComponent native element: %o',
      'color: salmon',
      this.demoComponentEl?.nativeElement
    );
  }

  onClick(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
