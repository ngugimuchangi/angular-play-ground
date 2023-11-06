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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'component lifecycle';
  inputVal: string = 'Initial val';
  toDestroy: boolean = false;

  constructor() {
    console.log('%cAppComponent constructor', 'color: salmon');
  }

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
  }

  ngAfterViewChecked(): void {
    console.log('%cAppComponent ngAfterViewChecked', 'color: salmon');
  }

  onClick(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
