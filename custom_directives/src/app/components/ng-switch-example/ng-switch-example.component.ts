import { Component } from '@angular/core';

@Component({
  selector: 'ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.scss'],
})
export class NgSwitchExampleComponent {
  tab: string = '';

  onTabChange(tabName: string) {
    this.tab = tabName;
  }
}
