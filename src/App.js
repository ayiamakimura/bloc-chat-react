import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
    

  render() {
    return (
      <div className="App">
        <header>
            <nav>
                <Link to='/' className='Linkroomlist'>RoomList</Link>
            </nav>
        </header>
        <h1>Bloc Chat</h1>
        <RoomList firebase={firebase}/>
            
      </div>
    );
  }
}

export default App;
