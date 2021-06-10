import { FormGroup } from '@angular/forms';
import { IReactiveFormError } from 'src/app/shared/constants/reactive-form-error.model';

function minMaxValidator(form: FormGroup): IReactiveFormError | null {
  const min = form.controls['min']?.value;
  const max = form.controls['max']?.value;

  if (min >= max) {
    return { minBiggerMax: true };
  }

  return null;
}

export { minMaxValidator };
