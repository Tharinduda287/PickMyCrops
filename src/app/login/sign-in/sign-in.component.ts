import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Api } from 'app/services/api.service';
import { User } from 'app/shared/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from 'app/services/navbar.service';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user:User;
  isLogginError:boolean;
  constructor(private loginService:LoginService,private router:Router,private http:HttpClient,private nav: NavbarService) { }

  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(userName,password){ 

    this.loginService.userAuthentication(userName,password)
    .subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('userToken',data.access_token);
      this.nav.show();
      this.router.navigate(['/dashboard']);
    },(err:HttpErrorResponse)=>{
      console.log(err);
      this.isLogginError=true;
    });
  }
  resetForm(form? :NgForm){
    if(form != null)
      form.reset();
    this.user = new User();
  }
}
