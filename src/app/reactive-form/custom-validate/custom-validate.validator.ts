import { AbstractControl } from '@angular/forms';
import { IReactiveFormError } from 'src/app/shared/constants/reactive-form-error.model';

const uppercasePattern = /[A-Z]/g;
const numberPattern = /[0-9]/g;
const specialCharPattern = /[!@#$%^&*]/g;

function passwordStrengthValidator(passwordControl: AbstractControl): IReactiveFormError | null {
  const password = passwordControl.value;
  let passwordStrength = 0;
  if (password.match(uppercasePattern)) {
    passwordStrength++;
  }
  if (password.match(numberPattern)) {
    passwordStrength++;
  }
  if (password.match(specialCharPattern)) {
    passwordStrength++;
  }

  switch (passwordStrength) {
    case 0:
      return { veryWeakPassword: true };
    case 1:
      return { weakPassword: true };
    case 2:
      return { reasonablePassword: true };
    case 3:
      return { strongPassword: true };
  }
  return null;
}

export { passwordStrengthValidator };
