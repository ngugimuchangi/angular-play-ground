import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template-driven-form';

  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;

  @ViewChild('registrationForm') form!: NgForm;

  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Prefer not to say' },
  ];

  defaultGender: string = 'male';
  defaultCountry: string = 'America';

  OnFormSubmitted() {
    console.log(this.form);
    //  Assigning form values to variables
    this.firstName = this.form.value.firstName;
    this.lastName = this.form.value.lastName;
    this.emailAddress = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.userName = this.form.value.username;
    this.dob = this.form.value.dob;
    this.IsAgreed = this.form.value;

    this.form.reset();
    console.log(this.defaultCountry);
    this.form.form.patchValue({
      gender: this.defaultGender,
      address: {
        country: this.defaultCountry,
      },
    });
  }

  GenerateUsername() {
    console.log(this.defaultCountry);
    let username = '';
    let firstName = this.form.value.firstName;
    let lastName = this.form.value.lastName;

    if (firstName.length >= 3) {
      username += firstName.slice(0, 3);
    } else {
      username += firstName;
    }

    if (lastName.length >= 3) {
      username += lastName.slice(0, 3);
    } else {
      username += lastName;
    }
    let datetime = new Date(this.form.value.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    // this.form.controls['username'].value = username;
    // console.log(this.form.value.username)

    /* Requires all the fields to be filled
        this.form.setValue({
          firstName: this.form.value.firstName,
          lastName: this.form.value.lastName,
          email: this.form.value.email,
          phone: this.form.value.phone,
          dob: this.form.value.dob,
          gender: this.form.value.gender,
          username: username,
          address: {
            street1: this.form.value.address.street1,
            street2: this.form.value.address.street2,
            country: this.form.value.address.country,
            city: this.form.value.address.city,
            region: this.form.value.address.region,
            postal: this.form.value.address.postal
          }
        });
    */

    this.form.form.patchValue({
      username: username,
      // address: {
      //   country: 'Japan'
      // }
    });
  }
}
