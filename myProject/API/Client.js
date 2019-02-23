import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import SocketIOClient from 'socket.io-client';

class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            data:
                {
                    totalCountQuestions: '',
                    username: '',
                    password: '',
                    credentialsOK: '',
                    gameIsFinished: '',
                    isNewQuestion: '',
                    serverQuestionId: '',
                    finalScore: '',
                    questionLabel: '',
                    proposedAnswer1: '',
                    proposedAnswer2: '',
                    proposedAnswer3: '',
                    proposedAnswer4: '',
                    correctAnswer: ''
                }
        };

        this.onReceivedData = this.onReceivedData.bind(this);
        this.onSend = this.onSend.bind(this);
        this._storeData = this._storeData.bind(this);

        this.socket = SocketIOClient('http://localhost:3000');
        console.log('socket');

        this.socket.on('data', this.onReceivedData);
    }

    // Event listeners
    /* When the server sends a message .*/

    onReceivedData(data) {
        this._storeData(data);
        console.log('data recu');
    }

    onSend(data=[]) {
        this.socket.emit('message', data[0]);
        this._storeData(data);
        console.log('sended');
    }


    render() {
        return (
            <View>
                <Text> t e x t </Text>
            </View>
        );
    }

    _storeData(data) {
        this.setState((previousState) => {
            return {
                ///////////////////////,
            };
        });
    }
}

module.exports = Client;
/*

import React from 'react-native';
import './UserAgent';

import io from 'socket.io-client/socket.io';

exports.createConnection = function(host, port, options) {
    var stream = io('ws://'+host+':'+port, {
        jsonp: false,
        reconnection: true,
        reconnectionAttempts: 32,
        reconnectionDelay: 50,
        reconnectionDelayMax: 30000,
        timeout: 2000,
        transports: ['websocket']
    });
    return stream;
}
*/





