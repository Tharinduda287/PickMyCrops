import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot}from '@angular/router';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(){//private router: Router) { 
    // console.log(route.snapshot.queryParamMap);
    // const snapshot: RouterStateSnapshot = router.routerState.snapshot;
    // console.log(snapshot);
  }

  ngOnInit() {
  }

}
