/*

import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { isLoggedIn } from './API/AuthenticationClass';
import {NavController} from './NavController';

export default class Main extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            loading: true,
            loggedIn: false
        };
    }
    async componentDidMount() {
        const loggedIn = await isLoggedIn();
        this.setState({ loggedIn, loading: false });
    }
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.base}>
                    <ActivityIndicator size='small' />
                </View>
            )
        }
        const RootNavigator = NavController(this.state.loggedIn);
        return <RootNavigator />
    }
}
const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});*/
/////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import CorrectAnswerScreen from "./Views/CorrectAnswerScreen";//ok
import IncorrectAnswerScreen from "./Views/IncorrectAnswerScreen";
import QuestionScreen from "./Views/QuestionScreen";
import QuestionScreenTest from "./Views/QuestionScreenTest";
import GameIsFinishedView from "./Views/GameIsFinishedView";
import LoginView from "./Views/LoginView";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;

        this.state = {
            isLoading: true,
        }
    }
    render() {
        return (
            <React.Fragment>
                <QuestionScreenTest/>
            </React.Fragment>
        );
    }
}


/*
import React from 'react';
import SocketIOClient from 'socket.io-client';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // Creating the socket-client instance will automatically connect to the server.
        this.socket = SocketIOClient('http://localhost:3000');
    }
}
module.exports = Main;*/
