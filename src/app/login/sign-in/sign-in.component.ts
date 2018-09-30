import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Api } from 'app/services/api.service';
import { User } from 'app/shared/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from 'app/services/navbar.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user:User;
  // api:Api;
  constructor(private api:Api,private router:Router,private http:HttpClient,private nav: NavbarService) { }

  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(form:NgForm){
    const body = new User();
    body.UserName=form.value.UserName;
    body.Password=form.value.Password;   
    var data= "Username="+body.UserName+"&Password="+ body.Password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    this.http.post('http://localhost:16626/token',data,{headers:reqHeader}).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('userToken',data.access_token);
      this.nav.show();
      this.router.navigate(['/dashboard']);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
  }
  resetForm(form? :NgForm){
    if(form != null)
      form.reset();
    this.user = new User();
  }
}
