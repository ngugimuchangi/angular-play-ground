import { Component } from '@angular/core';

@Component({
  selector: 'terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent {
  display = false;

  toggleDisplay() {
    this.display = !this.display;
  }
}
