import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class HttpServiceService {
  constructor(private _http: HttpClient) {}

  createRoom(newRoom : any){
    console.log('http.createRoom ', newRoom )
    return this._http.post('/api/create_room', newRoom);
  }
  joinRoom(id: any){
    console.log('http.joinRoom id ', id )
    return this._http.get('/api/join_room/'+id);
  }
  getRooms(){
    return this._http.get('/api/get_rooms');
  }
  deleteRoom(id : any){
    return this._http.delete('/api/delete_room/'+id);
  }
  createPlayer(newPlayer : any){
    return this._http.post('/api/create_player/', newPlayer);
  };
  updateRoom(room : any){ 
    console.log('http updateRomo ', room)
    return this._http.put('api/update_room/'+room._id, room);
  }
}
