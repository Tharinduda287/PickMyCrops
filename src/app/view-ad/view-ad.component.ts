import { Component, OnInit } from '@angular/core';
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Advertisement } from 'app/new-ad/new-advertisement.model';
import { ActivatedRoute } from '@angular/router';

declare const google: any;
@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.scss']
})
export class ViewAdComponent implements OnInit {

  y: number = 2;

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  ad:Advertisement;
  public api:Api;
  public id: string;
  lat:number=7.240937;
  lng:number=81.592800;
  userId:string;
  value:any;
  constructor(private route: ActivatedRoute,api:Api) { 
    this.api =api;
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.get("api/Advertiestment/"+this.id).subscribe((data:any)=>{
      this.ad=data;
      this.lat=this.ad.lat;
      this.lng=this.ad.lng;
      this.userId=data.userId;
      this.getuser();
      console.log(this.userId);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); 
  }


  getuser(){
    this.api.get('GetUsersp/'+this.userId).subscribe((response: Response) =>{
     
      this.value=response;
      console.log(this.value)
      }) 
  }
}
