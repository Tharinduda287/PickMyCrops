import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ad',
  templateUrl: './new-ad.component.html',
  styleUrls: ['./new-ad.component.scss']
})
export class NewAdComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  update(){
    // this.router.navigate(['/']);
  }
}
