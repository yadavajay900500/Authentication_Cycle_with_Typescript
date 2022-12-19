import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




const materialComponent=[
  MatListModule,
  MatFormFieldModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponent
  ],
  exports:[
    materialComponent
  ]
})
export class MaterialModule { }
