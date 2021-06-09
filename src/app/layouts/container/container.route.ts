import { Routes } from '@angular/router';
import { CrossFieldValidateComponent } from 'src/app/reactive-form/cross-field-validate/cross-field-validate.component';
import { FieldValidateComponent } from 'src/app/reactive-form/field-validate/field-validate.component';
import { CustomValidateComponent } from 'src/app/reactive-form/custom-validate/custom-validate.component';
import { FormArrayComponent } from 'src/app/reactive-form/form-array/form-array.component';

export const ContainerRoutes: Routes = [
  {
    path: 'field-validate',
    component: FieldValidateComponent,
  },
  {
    path: 'cross-field-validate',
    component: CrossFieldValidateComponent,
  },
  {
    path: 'custom-validate',
    component: CustomValidateComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
];
