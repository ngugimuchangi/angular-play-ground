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
  firstNameValueChanges?: Subscription;
  formStatusChanges!: Subscription;
  formStatus?: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
  formData?: any;

  /**
   * Additional initialization logic.
   * Initializes the reactive form and subscribes to
   * the first name value changes and form status changes.
   */
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

  /**
   * Cleans up before the component is destroyed.
   * Unsubscribes from the first name value changes and form status changes.
   */
  ngOnDestroy() {
    this.firstNameValueChanges?.unsubscribe();
    this.formStatusChanges.unsubscribe();
  }

  /**
   * Generates a username based on the first name, last name, and date of birth.
   */
  generateUsername() {
    let username = '';
    const firstName = this.reactiveForm.value.firstName;
    const lastName = this.reactiveForm.value.lastName;
    const datetime = new Date(this.reactiveForm.value.dob);

    username += firstName.length >= 3 ? firstName.slice(0, 3) : firstName;
    username += lastName.length >= 3 ? lastName.slice(0, 3) : lastName;

    username += datetime.getFullYear();
    username = username.toLowerCase();

    // this.reactiveForm.patchValue({ username: username });
    this.reactiveForm.get('username')?.setValue(username);
  }

  addSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.reactiveForm.get('skills')).push(control);
  }

  /**
   * Adds an experience form group to the experience form array.
   */
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

  /**
   * Returns the experience form array controls.
   */
  get experience() {
    return (<FormArray>this.reactiveForm.get('experience')).controls;
  }

  /**
   * Deletes an experience form group from the experience form array.
   * @param index {number} The index of the experience form group to delete.
   */
  deleteExperience(index: number) {
    const experienceControls = <FormArray<FormGroup>>(
      this.reactiveForm.get('experience')
    );
    experienceControls.removeAt(index);
  }

  /**
   * Returns the skills form array controls.
   */
  get skills() {
    return (<FormArray>this.reactiveForm.get('skills')).controls;
  }

  /***
   * Deletes a skill form control from the skills form array.
   * @param index {number} The index of the skill form control to delete.
   */
  deleteSkill(index: number) {
    const skillsControls = <FormArray<FormControl>>(
      this.reactiveForm.get('skills')
    );
    if (skillsControls.length > 1) skillsControls.removeAt(index);
  }

  /**
   * Submits the form data and resets the form.
   */
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
