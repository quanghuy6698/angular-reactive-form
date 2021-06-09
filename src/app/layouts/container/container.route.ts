import { Routes } from "@angular/router";
import { CrossFieldValidateComponent } from "src/app/reactive-form/cross-field-validate/cross-field-validate.component";

export const ContainerRoutes: Routes = [
  {
    path: "",
    component: CrossFieldValidateComponent,
  },
  {
    path: "greeting",
    component: CrossFieldValidateComponent,
  },
];
