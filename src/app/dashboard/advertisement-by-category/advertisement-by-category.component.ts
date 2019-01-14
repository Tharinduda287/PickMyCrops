import { Component, OnInit } from '@angular/core';
import { Api } from 'app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-by-category',
  templateUrl: './advertisement-by-category.component.html',
  styleUrls: ['./advertisement-by-category.component.scss']
})
export class AdvertisementByCategoryComponent implements OnInit {

  data:any;
  id:string;
  constructor(private route: ActivatedRoute,private api:Api) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.get("api/AdvertByCategory/"+this.id).subscribe((data:any)=>{
      this.data = data;
    },(err:HttpErrorResponse)=>{
      console.log(err);
    });
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
