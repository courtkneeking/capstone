import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title : String;
  // @Output() newItem;
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) 
  {
    this.title = "";
  // room = {players : ['item1', 'item2', 'item3', 'item4'],name :  ''};
  // currentRoom = 'TTTT';

  // addItem(newItem: string) {
  //   this.room.players.push(newItem);
  // }

  }
  ngOnInit(){
    this.title = "Draw Pass Draw";
  };
  returnHome() {this._router.navigate(['/'])};
  showSettings(){};


};
// export class AppComponent implements OnInit{
//   constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) 
//   {}
//   ngOnInit(){}
//   // tool bar buttons 
  
//   showSettings(){alert('showSettings()');}
//   // login(){alert('login()');}
// }
