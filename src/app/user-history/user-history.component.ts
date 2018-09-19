import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  data:any;
  constructor() {
    var data = require('./data.json');
    this.data=data;
   }

  ngOnInit() {
  }

}
