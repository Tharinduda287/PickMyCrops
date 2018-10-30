import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from 'app/shared/user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  readonly rootUrl = 'http://localhost:16626';
  constructor(private http:HttpClient) {}
  registerUser(user:User){
    const body = new User();
    body.UserName=user.UserName;
    body.Password=user.Password;
    body.Email=user.Email;
    body.FirstName=user.FirstName;
    body.LastName=user.LastName;     
    var reqHeader = new HttpHeaders({'No-Auth':'True'}); 
    return this.http.post(this.rootUrl+'/api/Account/Register',body,{headers:reqHeader});
  }

  userAuthentication(userName,password){
    var data= "UserName="+userName+"&Password="+ password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded','No-Auth':'True'});
    return this.http.post(this.rootUrl+'/token',data,{headers:reqHeader})
  }
  getUserClaims(){
    return this.http.get(this.rootUrl+'/person');
  }
}

