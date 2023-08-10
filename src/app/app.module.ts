import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FeatureModule} from '../app/feature/feature.module'
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FeatureModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    MatTooltipModule,
    MatButtonModule
  ],
  providers:  [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
