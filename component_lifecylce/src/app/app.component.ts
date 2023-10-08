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

  ngAfterViewInit(): void {
    console.log('%cAppComponent ngAfterViewInit', 'color: salmon');
  }

  onClick(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
