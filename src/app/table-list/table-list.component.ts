import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  vegListValue :any[];
  vegListValuePrice :any[];
  constructor() { }

  ngOnInit() {

    this.vegeList();
    this.vegeListPrice();
  }

  vegeList(){
    this.vegListValue = [
      {
        "ID": 1,
        "vegName" :"Potato",
        "farmerName" : "Andy",
        "city" : "colombo",
        "price" : "15.48"
      },
      {
        "ID": 2,
        "vegName" :"Tomato",
        "farmerName" : "randy",
        "city" : "kandy",
        "price" : "45.85"
      },
      {
        "ID": 3,
        "vegName" :"Pumkin",
        "farmerName" : "sandy",
        "city" : "Matale",
        "price" : "95.00"
      },
      {
        "ID": 4,
        "vegName" : "Carrot",
        "farmerName" : "Gunadasa",
        "city" : "Ella",
        "price" : "100.22"
      },
      {
        "ID": 5,
        "vegName" : "Beetroot",
        "farmerName" : "Samarasekara",
        "city" : "Kandy",
        "price" : "75.50"
      }
    ];
  }
  vegeListPrice(){
    this.vegListValuePrice = [
      {
        "ID": 1,
        "vegName" :"Potato",
        "farmerName" : "Andy",
        "city" : "colombo",
        "price" : "175.48"
      },
      {
        "ID": 2,
        "vegName" :"Tomato",
        "farmerName" : "randy",
        "city" : "kandy",
        "price" : "145.85"
      },
      {
        "ID": 3,
        "vegName" :"Pumkin",
        "farmerName" : "sandy",
        "city" : "Matale",
        "price" : "95.00"
      },
      {
        "ID": 4,
        "vegName" : "Carrot",
        "farmerName" : "Gunadasa",
        "city" : "Ella",
        "price" : "70.22"
      },
      {
        "ID": 5,
        "vegName" : "Beetroot",
        "farmerName" : "Samarasekara",
        "city" : "Kandy",
        "price" : "45.50"
      }
    ];
  }
}
