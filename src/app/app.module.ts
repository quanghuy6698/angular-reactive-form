import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { ContainerComponent } from './layouts/container/container.component';
import { ContainerModule } from './layouts/container/container.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(AppRoutes), SharedModule, ContainerModule],
  declarations: [ContainerComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
