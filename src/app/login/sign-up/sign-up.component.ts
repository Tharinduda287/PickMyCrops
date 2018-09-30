import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/user.model';
import { NgForm } from '@angular/forms';
import { Api } from 'app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:User;
  api:Api;
  constructor(api:Api,private http:HttpClient,private router:Router) { 
    this.api=api;
  }

  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(form:NgForm){
    if(form != undefined){
      const body = new User();
      body.UserName=form.value.UserName;
      body.Password=form.value.Password;
      body.Email=form.value.Email;
      body.FirstName=form.value.FirstName;
      body.LastName=form.value.LastName;      
      this.api.post('http://localhost:16626/api/Account/Register',body).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['/login']);
      },(err:HttpErrorResponse)=>{
        console.log(err);
      });
      // this.http.post('http://localhost:16626/api/Account/Register',body).subscribe((data:any)=>{
      //   console.log(data);
      // },e=>{
  
      // });
    }
    
  }
  resetForm(form? :NgForm){
    if(form != null)
      form.reset();
    this.user = new User();
  }
}
