import { AbstractControl } from "@angular/forms";

function intervalValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (control.value <= 0) {
    return { invalidInterval: true };
  }
  return null;
}

export { intervalValidator };
