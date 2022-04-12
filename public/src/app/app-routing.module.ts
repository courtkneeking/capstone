import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { LandingPageComponent  } from './landing-page/landing-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { FinishedGameComponent } from './finished-game/finished-game.component';

import { CanvasServiceService } from './canvas-service.service';
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'join', component: JoinRoomComponent},
  {path: 'create', component: CreateRoomComponent},
  {path: 'room/:url', component: RoomComponent},
  {path: 'end', component: FinishedGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
