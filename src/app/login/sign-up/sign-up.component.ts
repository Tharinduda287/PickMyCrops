import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/user.model';
import { NgForm } from '@angular/forms';
import { Api } from 'app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'app/services/login.service';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public loading=false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  user:User;
  constructor(private loginService:LoginService,private http:HttpClient,private router:Router) { 
  }

  ngOnInit() {
    this.resetForm();
  }
  OnSubmit(form:NgForm){
    if(form != undefined){
      this.loading =true;
      this.loginService.registerUser(form.value)
        .subscribe((data:any)=>{
          this.loading =false;
          if(data.Succeeded == true){
            console.log(data);
            this.router.navigate(['/login']);
          }
          else{
            this.loading =false;
            console.log(data.Errors[0]);
          }          
        });
    }
    
  }
  resetForm(form? :NgForm){
    if(form != null)
      form.reset();
    this.user = new User();
  }
}
