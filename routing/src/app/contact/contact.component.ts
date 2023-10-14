import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements CanExit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  country: string = 'usa';
  message: string = '';
  isSubmitted = false;

  submitContactForm() {
    this.isSubmitted = true;
  }

  canExit(): boolean {
    if (
      (this.firstName || this.lastName || this.email || this.message) &&
      !this.isSubmitted
    )
      return confirm(
        'You have unsaved changes. Are you sure you want to leave this page?'
      );
    return true;
  }
}
