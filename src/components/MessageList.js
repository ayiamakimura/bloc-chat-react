import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MessageList extends Component {
    constructor(props) {
       super(props);
        this.state = 
            { messages: []
            };
        this.messagesRef = this.props.firebase.database().ref('messages');
    }
    
    componentDidMount() {
        this.messsagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat(message) });
        })
    }
    
    
    
    render() {
        return ( 
            <section>
                {
                    this.state.messages.map( (message) =>
                        <h2  key={message.key}>
                        {room.name}
                        </h2>
                    )
                }
            </section>

        );
    }
}


export default MessageList;