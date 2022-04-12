import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // room : any;
  constructor(private _http: HttpClient, private _router: Router, private _route: ActivatedRoute) {
  }

  createRoom(room : any){
    console.log('http.createRoom ', room )
    return this._http.post('/api/create_room', room);
  }
  joinRoom(room: any){
    console.log('http.joinRoom ', room )
    console.log('httpp snapshot ', this._route.snapshot.params['name'])
    return this._http.get('/api/join_room/'+this._route.snapshot.params['name'], room);
  }
  createPlayer(player : any){
    return this._http.post('/api/create_player', player);
  }
}
