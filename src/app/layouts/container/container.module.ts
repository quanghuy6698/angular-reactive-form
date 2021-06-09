import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerRoutes } from './container.route';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrossFieldValidateComponent } from 'src/app/reactive-form/cross-field-validate/cross-field-validate.component';
import { FieldValidateComponent } from 'src/app/reactive-form/field-validate/field-validate.component';
import { CustomValidateComponent } from 'src/app/reactive-form/custom-validate/custom-validate.component';
import { FormArrayComponent } from 'src/app/reactive-form/form-array/form-array.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ContainerRoutes)],
  declarations: [CrossFieldValidateComponent, FieldValidateComponent, CustomValidateComponent, FormArrayComponent],
  exports: [CrossFieldValidateComponent, FieldValidateComponent, CustomValidateComponent, FormArrayComponent],
})
export class ContainerModule {}
