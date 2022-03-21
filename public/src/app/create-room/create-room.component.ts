import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
  }
  serverCreateRoom(){
    this._router.navigate(['room']);
  }

}
