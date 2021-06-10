import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { minMaxValidator } from './cross-field-validate.validator';

@Component({
  selector: 'cross-field-validate',
  templateUrl: './cross-field-validate.component.html',
  styleUrls: ['./cross-field-validate.component.css'],
})
export class CrossFieldValidateComponent {
  saveNotification: string = '';
  demoForm = this.formBuilder.group(
    {
      min: [0],
      max: [1],
    },
    { validators: [minMaxValidator] }
  );

  constructor(private formBuilder: FormBuilder) {}

  save() {
    this.saveNotification = 'Save successfully!';
  }
}
