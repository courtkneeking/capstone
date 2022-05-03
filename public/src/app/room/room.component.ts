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
  rooms: any;
  newPlayer: any;
  newRoom : any;
  existingRoom : any;
  room : any;
  errors : any;
  state = {create:false,join:false,room:false};
  title : any;
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { 
    this.rooms=[];
    this.newRoom = { name: '',requiredPlayers: Number};
    this.newPlayer = { name: ''};
    this.room = { name: '', requiredPlayers: Number, players : []};
    this.errors = [];
  }
  ngOnInit(){
    this.getRooms();
    if(this._route.snapshot.paramMap.get('state')=='join'){
      this.state.join=true;
    }else this.state.create=true;
  }

  getRooms(){
    let obs =this._httpService.getRooms();
    obs.subscribe(data=>{
      this.rooms= data;
      console.log('frontend GetRooms(): ', this.rooms);
    });
  }
  createRoom(){
    let obs = this._httpService.createRoom(this.newRoom);
    obs.subscribe(data=>{
      this.room=data;
      console.log('frontend createRoom(): ', this.room);
      this.changeState(3);
    });
  }
  joinRoom(id : any){
    console.log('joinroom ')
    let obs = this._httpService.joinRoom(id);
    obs.subscribe(data=>{
      this.room = data;
      console.log('frontend joinRoom(): ', this.room);
      this.changeState(3);
    });
  }
  deleteRoom(id: any){
    let obs = this._httpService.deleteRoom(id);
    obs.subscribe(data =>{
      this.rooms = this.getRooms();
      console.log('frontend deleteRoom(): ', this.rooms);
    });
  }
  createPlayer(){
    let obs = this._httpService.createPlayer(this.newPlayer);
    obs.subscribe(data =>{
      this.newPlayer= data;
      console.log('frontend createPlayer(): ', this.newPlayer);
      this.room.players.push(this.newPlayer);
      this.updateRoom();
    });
  }
  updateRoom(){
    let obs = this._httpService.updateRoom(this.room);
    obs.subscribe(data =>{
      this.room= data;
      console.log('frontend updateRoom(): ', this.room);

    });
    
  }


  // the game will start when the specified number of users is reached 
  // params: this.room, this.game, this.game.users 
  checkNumberUsers(){ 
    // if room.requiredUsers == game.currentUsers
    // startGame(); 
  };
  changeState(n: Number){
    this.state.create=false;
    this.state.join=false;
    this.state.room =true;
  }

  getLink(){
    alert(' implement getLink() ')
  }

}
