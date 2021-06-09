import { FormGroup } from "@angular/forms";

function onnCreateDateValidator(
  form: FormGroup
): { [key: string]: boolean } | null {
  const startDate = form.controls["startDate"].value;
  const endDate = form.controls["endDate"].value;

  const nowTime = new Date(getCurrentDateTime());
  const startTime = new Date(startDate);
  const endTime = new Date(endDate);

  if (endTime < startTime) {
    return { endBeforeStart: true };
  } else if (startTime < nowTime) {
    return { startBeforeNow: true };
  }
  return null;
}

export { onnCreateDateValidator };
