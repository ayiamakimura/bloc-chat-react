import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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

  render() {
    return (
      <div className="App">
        <header>
            <nav>
                <Link to='/' className='Linkroomlist'>RoomList</Link>
                <Route path="/messagelist" component={MessageList} />
            </nav>
        </header>
        <h1>Bloc Chat</h1>
<<<<<<< HEAD
        < RoomList firebase={firebase} activeRoom={this.state.activeRoom} activateRoom={this.activateRoom.bind(this)}/>
        < MessageList firebase={firebase} activeRoom={this.state.activeRoom} />
=======
        <RoomList firebase={firebase}/>
        <MessageList firebase={firebase}/>
>>>>>>> checkpoint-4-ListMessages
            
      </div>
    );
  }
}

export default App;
