import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pinCodeValidator } from './custom-validate.validator';

@Component({
  selector: 'custom-validate',
  templateUrl: './custom-validate.component.html',
  styleUrls: ['./custom-validate.component.css'],
})
export class CustomValidateComponent {
  createNotification: string = '';
  demoForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{8,254}/)]],
    pinCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), pinCodeValidator]],
  });

  constructor(private formBuilder: FormBuilder) {}

  create() {
    this.createNotification = 'Save successfully!';
  }
}
