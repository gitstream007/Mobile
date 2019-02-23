/*

export default class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            connected: false
        };
        this.socket = new WebSocket('ws://127.0.0.1:3000');
        this.socket.onopen = () => {
            this.setState({connected:true})
        };
        this.emit = this.emit.bind(this);
    }

    emit() {
        if( this.state.connected ) {
            this.socket.send("It worked!")
            this.setState(prevState => ({ open: !prevState.open }))
        }
    }
}


import React from 'react';
import SocketIOClient from 'socket.io-client';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            userId: null
        };
        this.CheckExistingUser = this.CheckExistingUser.bind(this);
        this.onReceivedMessage = this.onReceivedMessage.bind(this);
        this.onSend = this.onSend.bind(this);
        this._storeMessages = this._storeMessages.bind(this);

        this.socket = SocketIOClient('http://localhost:3000');
        this.socket.on('message', this.onReceivedMessage);
        this.CheckExistingUser();
    }
    CheckExistingUser() {
        AsyncStorage.getItem(USER_ID)
            .then((userId) => {
                // If there isn't a stored userId, then fetch one from the server.
                if (!userId) {
                    this.socket.emit('Here comes a new challenger', null);
                    this.socket.on('new one', (userId) => {
                        AsyncStorage.setItem(USER_ID, userId);
                        this.setState({ userId });
                    });
                } else {
                    this.socket.emit('new one', userId);
                    this.setState({ userId });
                }
            })
            .catch((e) => alert(e));
    }

//message from server
    onReceivedMessage(messages) {
        this._storeMessages(messages);
    }

/!**
    * When a message is sent, send the message to the server
    * and store it in this component's state.
*!/
    onSend(messages=[]) {
        this.socket.emit('message', messages[0]);
        this._storeMessages(messages);
    }

    render() {
        var user = { _id: this.state.userId || -1 };

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={user}
            />
        );
    }

    // Helper functions
    _storeMessages(messages) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
}

module.exports = Main;*/
