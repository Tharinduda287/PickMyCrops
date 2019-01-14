import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Advertisement } from 'app/new-ad/new-advertisement.model';
@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  private imageSrc: string = '';
  private advertisement:Advertisement =new Advertisement();
  api:Api;
  constructor(private router:Router,api:Api) {
    this.api=api;
   } 

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(function(position) {
      localStorage.setItem('lat',""+position.coords.latitude);
      localStorage.setItem('lng',""+position.coords.longitude);
    })
  }
  update(data:any){
    this.advertisement.Image =this.imageSrc;
    this.advertisement.lat =+localStorage.getItem('lat');
    this.advertisement.lng =+localStorage.getItem('lng');
    this.api.post("api/UploadImage",this.advertisement).subscribe((data:any)=>{
      console.log(data);
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
  }
  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }
} 
