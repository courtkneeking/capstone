var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express(); //Start the app 

const mongoose = require('mongoose'); // assisting MongoDB 

// Install MongoDB on host computer, should be already be running; 
mongoose.connect('mongodb://localhost/capstone', 
{ useNewUrlParser: true });

// Data is returned in json format from MongoDB
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Connect to Angular app (front end)
app.use(express.static(path.join(__dirname, 'public', 'dist', 'public')));

var PlayerSchema = new mongoose.Schema({ name: ''});  
var DrawingSchema = new mongoose.Schema({ image: String});
var GameSchema = new mongoose.Schema({drawings: [DrawingSchema]})
var RoomSchema = new mongoose.Schema({ 
    name: String, 
    requiredPlayers : Number, 
    players: [PlayerSchema], 
    game : GameSchema
}); 
var Player = mongoose.model('Player', PlayerSchema);
var Drawing = mongoose.model('Drawing', DrawingSchema);
var Game = mongoose.model('Game', GameSchema);
var Room = mongoose.model('Room', RoomSchema);

// RESTful-ish methods for Rooms and Drawings(Images)
// urls here will be called by a service file to function between the 
// front and back end when any db operations are needed.

app.post('/api/create_room', (req, res)=>{
    var newRoom = new Room(req.body);
    newRoom.save((err, result)=>{
        if(err){
            console.log('error creating room: ', err)
            res.json(err)
        }else{
            console.log('server created rooom:  ', result)
            res.json(result)
        }
    })
})

app.get('/api/join_room/:id', (req, res)=>{
    console.log('joining room  ... ');
    Room.findOne({_id:req.params.id}, (err, room)=>{
        if(err){
            console.log('error joining room ')
            res.json(err);
        }else{
            console.log('joined room', room)
            res.json(room)
        }
    })
});

app.get('/api/get_rooms', (req, res) => {
    Room.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});

app.delete('/api/delete_room/:id', (req, res)=>{
    console.log('deleting ... ');
    Room.remove({_id:req.params.id}, (err)=>{
        if(err){
            console.log(err)
        }else{
            res.json({success: 'You successfully deleted this task.'})
        }
    })
})

app.post('/api/create_player', (req, res)=>{
    var newPlayer = new Player(req.body);
    newPlayer.save((err, result)=>{
        if(err){
            console.log('error creating player')
            res.json(err)
        }else{
            console.log('server created player:  ', result)
            res.json(result);
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


var session = require('express-session');
app.use(session({
    secret: 'keyboardkitten',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));