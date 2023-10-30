import { FormControl } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') >= 0) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  static async userNameAllowed(control: FormControl) {
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

function userNameAllowed(username: string) {
  const takenUsernames = ['admin', 'superuser', 'administrator'];
  return takenUsernames.includes(username);
}
