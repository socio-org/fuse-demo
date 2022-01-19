import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
const modules = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatInputModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})

export class MaterialModule {
}
