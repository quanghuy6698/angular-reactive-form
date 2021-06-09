import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { minMaxValidate } from './cross-field-validate.validator';

@Component({
  selector: 'cross-field-validate',
  templateUrl: './cross-field-validate.component.html',
  styleUrls: ['./cross-field-validate.component.css'],
})
export class CrossFieldValidateComponent {
  demoForm = this.formBuilder.group(
    {
      min: [0],
      max: [1],
    },
    { validators: [minMaxValidate] }
  );

  constructor(private formBuilder: FormBuilder) {}

  save() {
    console.log('save successfully');
  }
}
