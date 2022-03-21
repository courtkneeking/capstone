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
  { }

  ngOnInit(){
  }
  createRoom(){
    this._router.navigate(['create']);
  }
  joinRoom(){
    this._router.navigate(['join']);
  }
  showSettings(){alert('showSettings()');}
  giveInformation(){alert('giveInformation()')}

}
