import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  @Input() ad: any;
  constructor() { }

  ngOnInit() {
  }

}
