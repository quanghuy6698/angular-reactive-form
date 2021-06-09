import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContainerRoutes } from "./container.route";
import { NavbarComponent } from "../navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ContainerRoutes)],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class ContainerModule {}
