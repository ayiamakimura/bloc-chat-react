import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RoomList extends Component {
    constructor(props) {
       super(props);
        this.state = 
            { rooms: [] 
            };
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }
    
    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( snapshot.val() ) });
            this.setState({ rooms: this.state.rooms.concat( room ) })
     });
    }
    
    createRoom(e) {
        e.preventDefault();
        if (this.state.newRoomName.length > 3) {
            this.roomsRef.push({ name: this.state.newRoomName });
        } else {
            alert('Room name must contain at least 3 characters.')
        }
        this.setState({ newRoomName: '' })
    } 
    
    
    render() {
        return ( 
            <section>
                {
                    this.state.rooms.map( (room) =>
                        <h2 className='roomlist' key={room.key}>
                        {room.name}
                        </h2>
                    )
                }
            </section>

        );
    }
}


export default RoomList;