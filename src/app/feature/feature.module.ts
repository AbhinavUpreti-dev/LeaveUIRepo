import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavetypesComponent } from './leavetypes/leavetypes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { LeaveEditComponent } from './leave-edit/leave-edit.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LeavetypesComponent,
    LeaveEditComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserModule,
        FormsModule,
        ReactiveFormsModule

  ],
  exports:[LeavetypesComponent,LeaveEditComponent]
})
export class FeatureModule { }
