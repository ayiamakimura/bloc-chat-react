import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RoomList extends Component {
    constructor(props) {
       super(props);
        this.state = 
            { rooms: []
            };
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleChange = this.handleChange.bind(this);
        this.createRoom = this.createRoom.bind(this);

    }
    
    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room) });
        })
    }
    
    createRoom(e) {
        e.preventDefault();
        this.roomsRef.push({ name: this.state.name });
        this.setState({ name: "" });
    }
    
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
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
                <div>
                    <h3>Create new room</h3>
                        <form onSubmit={this.createRoom}>
                            <label>
                                Enter your room name:
                                <input type="text" value={this.state.name} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Cancel" />
                            <input type="submit" value="Create room"  />
                        </form>
                </div>
            </section>

        );
    }
}


export default RoomList;