import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of, throwError } from 'rxjs';
import { User } from './Interfaces/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient,public jwtHelper: JwtHelperService) { 
      localStorage.getItem('token')?this.IsLoggedIn.next(true) : this.IsLoggedIn.next(false);
    }
  token : string;
  public IsLoggedIn = new Subject<boolean>();
  login(user : User) : Observable<string>
  {
      return this.httpClient.post<string>('https://localhost:7276/api/Auth/login', 
      { userName:user.UserName,password:user.Password })
      .pipe(map(_=>{
        this.IsLoggedIn.next(true);
        return _;
      }),
      catchError((e: any) =>{
        //do your processing here
        this.IsLoggedIn.next(false);
        return throwError(() => new Error(e));
      })
    );
  }

  register(user:User) : Observable<string>
  {
    return this.httpClient.post<string>('https://localhost:7276/api/Auth/register', 
    {email:user.UserName, userName:user.UserName,password:user.Password })
    .pipe(map(_=>{
      this.IsLoggedIn.next(true);
      return _;
    }),
    catchError((e: any) =>{
      //do your processing here
      this.IsLoggedIn.next(false);
      return throwError(() => new Error(e));
    })
  );
  }

  public isAuthenticated(): Observable<boolean> {
    
    const token = localStorage.getItem('token');
    token?this.IsLoggedIn.next(true):this.IsLoggedIn.next(false);
    // Check whether the token is expired and return
    // true or false
    return of(!this.jwtHelper.isTokenExpired(token));
  }
  public logout(){
    this.IsLoggedIn.next(false);
    localStorage.clear();
  }
}
