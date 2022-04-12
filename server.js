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
var RoomSchema = new mongoose.Schema({ 
    name: '', password: '',
    requiredPlayers : Number, 
    currentPlayers : Number
    
    }, { collection : 'rooms' 
}); 
var Room = mongoose.model('Room', RoomSchema);  
// Players have an original drawing and current drawing
// Contained by Room (a user must start or join one)
var PlayerSchema = new mongoose.Schema(
    { name: '', room: ''}, { collection : 'players' });  
    // originalDrawing: Object, currentDrawing: Object    
 
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
app.post('/api/create_room', (req, res)=>{
    var newRoom = new Room(req.body);
    newRoom.save((err, newRoom)=>{
        if(err){
            console.log('error creating room')
            res.json(err)
        }else{
            console.log('server created rooom:  ', newRoom)
            res.json(newRoom)
        }
    })
})
// find a room by url 
app.get('/api/join_room/:url', (req, res)=>{
    Room.findOne({name: req.params.url}, (err, joinRoom)=>{
        if(err){
            console.log('error joining room ')
            res.json(err);
        }else{
            console.log('joined room', joinRoom)
            res.json(joinRoom)
        }
    })
})
app.post('/api/create_player', (req, res)=>{
    var newPlayer = new Player(req.body);
    newPlayer.save((err, newPlayer)=>{
        if(err){
            console.log('error creating player')
            res.json(err)
        }else{
            console.log('server created player:  ', newPlayer)
            res.json(newPlayer);
        }
    })
})
    


// this will call other create urls for testing
app.get('api/test', (req, res) => {
    var newTest = new Test();
    newReview.save((err, newTest)=>{
        if(err){
            res.json(err)
        }else{
            res.json(newTest);
            console.log('test', newTest)
        }
    })
});

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