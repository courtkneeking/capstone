import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';
// import { NgCanvasPainterComponent } from 'ng-canvas-painter';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  Game : any;
  col : any;
  constructor(private _httpService: HttpServiceService, 
    private _route: ActivatedRoute, private _router: Router,
    // private _canvas: NgCanvasPainterComponentß
    ) 
    { 
    this.Game = 5;
    this.col = "";
    // this._canvas.lineWidth=2;
    // this._canvas.color = "#00FF00";
  }

  ngOnInit(): void {
    this.col = "green";
  }
  
  changeColor(){
    this.col = "yellow";
  }
    // create a drawing for each user at the start of each game 
  // user also has a user.currentDrawing, which = newDrawing initially 
  // this is handled in server.js
  // just send user objects to server to update 
  createDrawings(){}; 

  // when each round ends 
  continueGame(){
    // if this.game.round != this.room.maxRounds { }
    // reset Timer // front-end timer; 
    // game.Round++;
    // swapDrawings();
  };

  // this function happens in server.js; server.js has saveDrawings() 
  // just send user objects there to update and return 
  swapDrawings(){};

}
