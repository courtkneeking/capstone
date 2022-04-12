import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {
  existingRoom : any;
  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { 
    this.existingRoom = { name: '', password: ''}
  }

  ngOnInit(): void {} 

  // upon button click() 
  // check that room exists return success/failure 
  // if success route to room component
  // else display err 
  joinRoom(){
    this._httpService.joinRoom(this.existingRoom.name);
    this._router.navigate(['room']);
  }

}
