import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    test : Date = new Date();
    userName :string;
    email :string;
    contactNo:string;
    firstName:string;
    lastName:string;
    address:string;
    city:string;
    password:string;
    aboutMe:string;

    max:number;
    rate:number;
    // isReadonly: boolean = true;
    
    isReadonly: boolean = true;
    data:any;


    constructor() {
     
     }

    ngOnInit() {
      this.user();
    }
    usertemp(){ 
     
        if(this.userName==null&&this.lastName==null){
          this.max=5;
          this.rate=3;
          this.userName="NihalG";
          this.email="gamage@gmail.com"; 
          this.contactNo="014578965";
          this.firstName="Nihal";
          this.lastName="Gamage";
          this.address="No:45,Aththidiyard,Kalapuwana";
          this.city="Colombo";
          this.password="12345asda"
          this.aboutMe="I usually grow carrots and beetroots and I always try to keep the quality of my product.";
        }
        else{
          // console.log("hi im here");
         
        }
      
    }
    user(){
      this.usertemp();
      
    }

    update(){
        console.log(this.userName)
        this.usertemp();
        window.location.reload();
    }
}
