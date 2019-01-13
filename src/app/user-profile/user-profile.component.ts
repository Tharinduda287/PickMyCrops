import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { flushMicrotasks } from '@angular/core/testing';
import { farmerDetail } from 'app/shared/farmerDetail.model';
import { Api } from 'app/services/api.service';



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
    addressLine1:string;
    addressLine2:string;
    city:string;
    password:string;
    aboutMe:string;
    FarmerId :number;
    path:string;
    tempPath:string;
    max:number;
    rate:number;
    farmerrole:any;
    buyerrole:any;
    roleType:any;
    // isReadonly: boolean = true;
    
    isReadonly: boolean = true;
    data:any;
    readonly rootUrl = 'http://localhost:16626';
    farmer:farmerDetail;
    api:Api;

    constructor(private http:HttpClient,api:Api) {
     this.api=api;
     }
 
    ngOnInit() {
      // this.user();
      this.path="https://www.thebetterindia.com/wp-content/uploads/2017/12/IMG-20171207-WA0017-500x500.jpg";
      this.getDeatail();
      //this.update();
     
    }
    updatePhoto(event:any){
        this.tempPath=event.target.value;
        
        console.log(this.tempPath);
        this.updatePhotoVal();
    }
     updatePhotoVal(){
       
        var reqHeader = new HttpHeaders({'No-Auth':'True'}); 
        this.http.post(this.rootUrl +'/UpdateUserPhoto',this.tempPath,{headers:reqHeader}).subscribe((response: Response) =>{
          console.log (response.json());
          
          })   
          //window.location.reload();
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
          this.addressLine1="No:45,Aththidiyard";
          this.addressLine2="Kalapuwana";
          this.city="Colombo";
          this.password="12345asda"
          this.aboutMe="I usually grow carrots and beetroots and I always try to keep the quality of my product.";
          this.farmerrole=true;
          this.buyerrole=false;
        }
        else{
         
         
        }
      
    }
    user(){
      this.usertemp();
      
    }

    update(){
        console.log(this.userName)
        /************ in here should add farmer role and buyer role
          as well as must include them in shared tye and backend also*********/
          if (this.farmerrole) {
            if (this.buyerrole) {
                this.roleType = 3;
            }
            else
            {
              this.roleType = 1;
            }
          }
          else
          {
            if (this.buyerrole)
            {
              this.roleType = 2;
            }
            else {
              this.roleType = 0;
            }
         }
        this.farmer=new farmerDetail();
        this.farmer.UserName = this.userName;
        this.farmer.FarmerId = this.FarmerId;
        this.farmer.Email = this.email; 
        this.farmer.ContactNumber = this.contactNo;
        this.farmer.FirstName = this.firstName;
        this.farmer.LastName = this.lastName;
        this.farmer.AddressLine_1 = this.addressLine1;
        this.farmer.AddressLine_2 = this.addressLine2;
        this.farmer.City = this.city;      
        this.farmer.AboutMe = this.aboutMe; 
        this.farmer.roleType=this.roleType;
        
      
        console.log(this.farmer)
        var reqHeader = new HttpHeaders({'No-Auth':'True'}); 
        
        // this.http.post(this.rootUrl +'/UpdateUser',this.farmer,{headers:reqHeader}).subscribe((response: Response) =>{
          this.api.post('UpdateUser',this.farmer).subscribe((response: Response) =>{
          console.log (response.json());
          
          })   
          window.location.reload();
    }

    getDeatail(){
      
       //var reqHeader = new HttpHeaders({'No-Auth':'True'}); 
   
    return this.api.get('GetUser').subscribe((data:any)=>{ 
      console.log(data.AddressLine_1 + data.AddressLine_2);
      if(data.roleType==1){
        this.farmerrole=true;
        this.buyerrole=false;
      }
      else if(data.roleType==2){
        this.farmerrole=false;
        this.buyerrole=true;
      }
      else if(data.roleType==3){
        this.farmerrole=true;
        this.buyerrole=true;
      }
      else{
        this.farmerrole=false;
        this.buyerrole=false;
      }
      if(this.userName==null&&this.lastName==null){
        this.FarmerId=data.FarmerId;
        this.max=5;
        this.rate=3;
        this.userName=data.UserName;
        this.email=data.Email; 
        this.contactNo=data.ContactNumber;
        this.firstName=data.FirstName;
        this.lastName=data.LastName;
        this.addressLine1=data.AddressLine_1;
        this.addressLine2=data.AddressLine_2;
        this.city=data.City;
        //this.password="12345asda"
        this.aboutMe=data.AboutMe;
        this.farmer.roleType=this.roleType;
        
      }
      
    },(err)=>{
      console.log(err);
    });
  
  }
}
