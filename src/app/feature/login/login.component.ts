import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../Interfaces/User';
import { Subject } from 'rxjs';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  token : string;
  email : string;
  password : string;
  errors : boolean;
  IsLoaded : Subject<boolean>;
  constructor(private router : Router,private loginService: LoginService,private dialog:MatDialog)
  {

  }

  ngOnInit(): void {    
      localStorage.clear();
  }
  submit() {    
    this.IsLoaded = this.loginService.IsLoggedIn;
    if (this.form.valid) {
      let user:User = {UserName:this.email,Password:this.password};
       this.loginService.login(user).subscribe(data =>{
        this.token = data;
        localStorage.setItem('token', JSON.stringify({ token: data['token'] }));
        this.router.navigate(['/leaveDetails']);
       }, (error : any) =>{
           this.errors = error;
       });
       
    }
  }

  register(){
    this.dialog.open(RegisterUserComponent).afterClosed().subscribe(result => {
     
    });
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
