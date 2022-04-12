import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})

export class CreateRoomComponent implements OnInit {
  newRoom : any = {
    name: '',
    password: '',
    requiredPlayers: '', 
    currentPlayers: ''  };
  errors : any;
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { 
    // room object fields linked here
    // show defaults  
    this.newRoom = { name: '', password: '',
      requiredPlayers: Number,
      currentPlayers: Number
    };
    this.errors = [];
  }
  ngOnInit(): void {} // not needed here 
  

  createRoom(){
    let obs = this._httpService.createRoom(this.newRoom);
    obs.subscribe((data:any)=>{
      this.newRoom = data;
    });
    this._router.navigate(['room/'+this.newRoom]);
  }

}
