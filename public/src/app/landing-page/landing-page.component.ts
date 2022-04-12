import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) 
  { 
    // does not store object here; 
    // basic routing functions are all needed in this component 
  }

  ngOnInit(){} // not needed 
  createRoom(){ // just navigate to these components 
    this._router.navigate(['create']);
  }
  joinRoom(){
    this._router.navigate(['join']);
  }
  giveInformation(){alert('giveInformation()')}


}
