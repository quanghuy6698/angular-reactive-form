import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent {
  demoForm = this.formBuilder.group({
    school: [],
    classes: this.formBuilder.array([]),
  });
  constructor(private formBuilder: FormBuilder) {}
}
