import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
