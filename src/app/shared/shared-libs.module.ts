import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  exports: [FormsModule, CommonModule, InfiniteScrollModule, ReactiveFormsModule],
})
export class SharedLibsModule {}
