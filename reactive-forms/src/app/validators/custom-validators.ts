import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  /**
   * A custom validator that checks if the username is taken
   * @param control {AbstractControl} The control to validate
   * @returns  {ValidationErrors | null} A ValidationErrors object if the username is taken,
   * or null if the username is available.
   */
  static noSpaceAllowed(control: AbstractControl): ValidationErrors | null {
    if (control.value != null && control.value.indexOf(' ') >= 0) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  /**
   * A custom asynchronous validator that checks if the username is taken
   * @param control {AbstractControl} The control to validate
   * @returns  {Promise<ValidationErrors | null>} A promise that resolves to either
   * a ValidationErrors object if the username is taken, or null if the username is available.
   */
  static async userNameAllowed(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    const username = control.value;
    return new Promise((resolve) => {
      setTimeout(() => {
        const isTaken = userNameAllowed(username);
        if (isTaken) resolve({ userNameAllowed: true });
        else resolve(null);
      }, 2000);
    });
  }
}

/**
 * Checks if the username is taken
 * @param username {string} The username to check
 */
function userNameAllowed(username: string) {
  const takenUsernames = ['admin', 'superuser', 'administrator'];
  return takenUsernames.includes(username);
}
