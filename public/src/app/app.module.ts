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
import { GameComponent } from './game/game.component';

import { NgCanvasPainterModule } from 'ng-canvas-painter';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LandingPageComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCanvasPainterModule,
    
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
