import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

import {MatDialogModule} from '@angular/material/dialog'; 


@NgModule({
  declarations: [],
  imports: [
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
