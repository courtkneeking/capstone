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

  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

}
