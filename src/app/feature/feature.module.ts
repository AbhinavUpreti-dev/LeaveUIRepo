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
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    LeavetypesComponent,
    LeaveEditComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule

  ],
  exports:[LeavetypesComponent,LeaveEditComponent,LoginComponent]
})
export class FeatureModule { }
