import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LeaveEditComponent } from 'src/app/feature/leave-edit/leave-edit.component';
import { LoginService } from 'src/app/feature/login.service';
import { Observable, Subject } from 'rxjs';
import { Route, Router, RouterLink } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit{
  IsLoggedIn$ :  Subject<boolean>;
  constructor(public dialog: MatDialog,private auth: LoginService,private router : Router) {}
 
  ngOnInit(): void {
    debugger;
    this.IsLoggedIn$  = this.auth.IsLoggedIn;
  }
  
  
 submit(){
  this.auth.logout();
  this.router.navigate(['/login']);
 }
}
