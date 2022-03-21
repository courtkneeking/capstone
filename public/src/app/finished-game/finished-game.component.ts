import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from './../http-service.service';

@Component({
  selector: 'app-finished-game',
  templateUrl: './finished-game.component.html',
  styleUrls: ['./finished-game.component.css']
})
export class FinishedGameComponent implements OnInit {

  constructor(private _httpService: HttpServiceService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }

}


