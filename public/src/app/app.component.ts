import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './http-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) 
  {}
  ngOnInit(){}
  // tool bar buttons 
  returnHome(){this._router.navigate(['/']);}
  showSettings(){alert('showSettings()');}
  // login(){alert('login()');}
}
