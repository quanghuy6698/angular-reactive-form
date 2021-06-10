import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordStrengthValidator } from './custom-validate.validator';

@Component({
  selector: 'custom-validate',
  templateUrl: './custom-validate.component.html',
  styleUrls: ['./custom-validate.component.css'],
})
export class CustomValidateComponent {
  createNotification: string = '';
  demoForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9]{8,254}/)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(254), passwordStrengthValidator]],
  });

  constructor(private formBuilder: FormBuilder) {}

  create() {
    this.createNotification = 'Save successfully!';
  }
}
