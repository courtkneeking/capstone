import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { LandingPageComponent  } from './landing-page/landing-page.component';
import { GameComponent  } from './game/game.component';
import { CanvasServiceService } from './canvas-service.service';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'room', component: RoomComponent},
  {path: 'game', component: GameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
