import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { LandingPageComponent  } from './landing-page/landing-page.component';

import { CanvasServiceService } from './canvas-service.service';
const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'room', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
