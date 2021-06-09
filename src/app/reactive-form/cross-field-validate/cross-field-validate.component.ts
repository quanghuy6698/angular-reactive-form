import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { onnCreateDateValidator } from "./cross-field-validate.validator";

@Component({
  selector: "cross-field-validate",
  templateUrl: "./cross-field-validate.component.html",
  styleUrls: ["./cross-field-validate.component.css"],
})
export class CrossFieldValidateComponent {
  createForm = this.fb.group(
    {
      status: [],
      interval: [],
      startDate: [],
      endDate: [],
      careScriptId: [],
    },
    { validators: [onnCreateDateValidator] }
  );

  constructor(private fb: FormBuilder) {}
}
