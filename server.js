// Standard imports from npm 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// ... these are for later ... 

const mongoose = require('mongoose'); // assisting MongoDB 

// Install MongoDB on host computer, should be already be running; 
mongoose.connect('mongodb://localhost/capstone', { useNewUrlParser: true });

var db = mongoose.connection; //connect to db 
var app = express(); //Start the app 

// Data is returned in json format from MongoDB
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to Angular app (front end)
app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));

// Schemas: objects to be saved during the game

// Rooms have a unique parameter/link, creator, users, 
// (May also need to store the relative location of the drawings)
var RoomSchema = new mongoose.Schema(
    { id: Number, host: Object, players: Object}, 
    { collection : 'rooms' }); 
// Players have an original drawing and current drawing
// Contained by Room (a user must start or join one)
var PlayerSchema = new mongoose.Schema(
    { id: Number, originalDrawing: Object, currentDrawing: Object}, 
    { collection : 'players' });  
// Drawings will be exported images, store as a string of bytes (?)
// overwrite after each turn;  Contained by User; 
var DrawingSchema = new mongoose.Schema(
    { image: Object} , // not sure how to store image 
    { collection : 'drawings' });

// containers for objects to be returned 
var Room = mongoose.model('Room', RoomSchema);
var Player = mongoose.model('Player', PlayerSchema);
var Drawing = mongoose.model('Drawing', DrawingSchema);

// RESTful-ish methods for Rooms and Drawings(Images)
// urls here will be called by a service file to function between the 
// front and back end when any db operations are needed.

// createRoom(newHost), create Player, Room, return link/roomParam
// joinRoom(roomParam), create Player, add to Room
// startGame(roomParam), create users, drawings 
// continueGame(roomParam), Screenshot, overwrite each drawing
// finishGame(roomParam), share drawings
// destroyEverything(roomParam), can be called when time has run out. 


// a catch all case 
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
}); 

// http://localhost:3000/
app.listen(3000, function(){
    console.log('3000')
})



// var request = require('request');
// var https = require('https');
// var cors = require('cors'); // relating to headers ; 
// var fs = require('fs');