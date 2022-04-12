import { getLocaleNumberFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';
// import { fabric } from "fabric";
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {
  // the objects that we get from the server that are displayed in the template 
  room : any = {
    name: '',
    password: '',
    requiredPlayers: Number, 
    currentPlayers: Number,
  };
  player : any = {
    name : ''
  }
  // use this only for making new objects; forms 
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) 
  { 
    this.room = {
      name: '',
      password: '',
      requiredPlayers: Number, 
      currentPlayers: Number};
    this.player = { name: ''};  // selfDrawing : Object, currentDrawing: Object, 
  }
  ngOnInit(): void {
    this.getRoom();
    console.log('room.name: ', this.room.name);
  }
  getRoom(){
    let obs =this._httpService.joinRoom(this._route.snapshot.params);
    obs.subscribe((data:any)=>{
      this.room = {name: '', password: '',requiredPlayers: Number, 
      currentPlayers: Number}; // selfDrawing: '', currentDrawing: '',
    });
  };
  // the room already exists, the user accessing the room via this url will be added to it
  createPlayer(){
    let obs =this._httpService.createPlayer(this.player);
    obs.subscribe((data:any)=>{
      this.player = data; // selfDrawing: '', currentDrawing: '',
    });

  }; 



  // the game will start when the specified number of users is reached 
  // params: this.room, this.game, this.game.users 
  checkNumberUsers(){ 
    // if room.requiredUsers == game.currentUsers
    // startGame(); 
  };
  // the game begins 
  startGame(){
  };


  getLink(){
    alert(' implement getLink() ')
  }

}
