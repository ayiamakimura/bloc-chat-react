import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

  var config = {
    apiKey: "AIzaSyAsclpC26IJN4gxkeawKcuTXCGAIysyuEQ",
    authDomain: "rooms-5d078.firebaseapp.com",
    databaseURL: "https://rooms-5d078.firebaseio.com",
    projectId: "rooms-5d078",
    storageBucket: "rooms-5d078.appspot.com",
    messagingSenderId: "948965291973"
  };
  firebase.initializeApp(config);


class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { activeRoom: '' };
        this.activateRoom = this.activateRoom.bind(this);
    }
    
    activateRoom(room) {
        this.setState({ activeRoom: room });
        console.log(room);
    }
    
    setUser(user) {
        this.setState({ user: user });
        if (user !== null) {console.log(user.displayName)};
    }
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro"></p>
                <main></main>
                < User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
                < RoomList firebase={firebase} activeRoom={this.state.activeRoom} activateRoom={this.activateRoom.bind(this)}/>
                < MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
            </div>
        );
    }
}

export default App;
