import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service'
// import { fabric } from 'fabric';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { FinishedGameComponent } from './finished-game/finished-game.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LandingPageComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    FinishedGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
