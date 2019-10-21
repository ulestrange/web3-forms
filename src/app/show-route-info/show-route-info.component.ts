import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-route-info',
  templateUrl: './show-route-info.component.html',
  styleUrls: ['./show-route-info.component.css']
})
export class ShowRouteInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe ( parameters => {console.log ('parameters : ',parameters); });
    this.route.queryParams.subscribe ( parameters => {console.log ('query parameters : ',parameters); });
  }

}
