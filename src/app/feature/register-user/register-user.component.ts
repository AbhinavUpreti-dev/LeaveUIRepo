import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from '../login.service';
import { User } from '../Interfaces/User';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  token : string;
  email : string;
  userName:string;
  password : string;
  errors : boolean;
  IsLoaded : Subject<boolean>;
  showSuccess : boolean;
  constructor(private router : Router,private loginService: LoginService,private toastr:ToastrService,private dialog:MatDialog)
  {

  }

  ngOnInit(): void {    
      localStorage.clear();
  }
  submit() {    
    this.IsLoaded = this.loginService.IsLoggedIn;
    if (this.form.valid) {
      let user:User = {UserName:this.email,Password:this.password};
       this.loginService.register(user).subscribe(data =>{
        this.toastr.success('Success', 'User Created SuccessFully');
        this.dialog.closeAll();
       }, (error : any) =>{
           this.errors = error;
       });
       
    }
  }
}
