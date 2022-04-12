import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

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
import { TestComponent } from './test/test.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LandingPageComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    FinishedGameComponent,
    TestComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
