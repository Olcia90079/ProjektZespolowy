import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatGridListModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatGridListModule,
  ]
})
export class MaterialModule { }
