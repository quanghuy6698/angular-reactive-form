import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { intervalValidator } from "./custom-validate.validator";

@Component({
  selector: "custom-validate",
  templateUrl: "./custom-validate.component.html",
  styleUrls: ["./custom-validate.component.css"],
})
export class CustomFieldValidateComponent {
  createForm = this.fb.group({
    status: [],
    interval: [2, [intervalValidator]],
    startDate: [],
    endDate: [],
    careScriptId: [],
  });

  constructor(private fb: FormBuilder) {}
}
