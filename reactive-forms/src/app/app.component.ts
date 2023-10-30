import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'reactive-forms';
  reactiveForm!: FormGroup;
  firstNameValueChanges!: Subscription;
  formStatusChanges!: Subscription;
  formStatus?: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
  formData?: any;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        ...Array(1),
        CustomValidators.userNameAllowed
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('America', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
    });

    this.firstNameValueChanges = this.reactiveForm
      .get('firstName')
      ?.valueChanges.subscribe((value) => {
        console.log(value);
      });

    this.formStatusChanges = this.reactiveForm.statusChanges.subscribe(
      (status) => {
        // console.log('Form status:', status);
        this.formStatus = status;
      }
    );
  }

  ngOnDestroy() {
    this.firstNameValueChanges.unsubscribe();
    this.formStatusChanges.unsubscribe();
  }

  generateUsername() {
    let username = '';
    let firstName = this.reactiveForm.value.firstName;
    let lastName = this.reactiveForm.value.lastName;

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
    let datetime = new Date(this.reactiveForm.value.dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    // this.reactiveForm.patchValue({ username: username });
    this.reactiveForm.get('username')?.setValue(username);
  }

  addSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('skills')).push(control);
  }

  addExperience() {
    const experienceFromGroup = new FormGroup({
      company: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      from: new FormControl(null, Validators.required),
      to: new FormControl(null, Validators.required),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(experienceFromGroup);
  }

  deleteExperience(index: number) {
    const experienceControls = <FormArray<FormGroup>>(
      this.reactiveForm.get('experience')
    );
    experienceControls.removeAt(index);
  }

  deleteSkill(index: number) {
    const skillsControls = <FormArray<FormControl>>(
      this.reactiveForm.get('skills')
    );
    if (skillsControls.length > 1) skillsControls.removeAt(index);
  }

  onFormSubmitted() {
    console.log(this.reactiveForm.value);
    this.formData = this.reactiveForm.value;
    this.reactiveForm.reset();
    this.reactiveForm.patchValue({
      gender: 'male',
      address: { country: 'America' },
    });
  }
}
