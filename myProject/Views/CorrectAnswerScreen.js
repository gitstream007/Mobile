import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


export default class CorrectAnswerScreen extends Component {
    static navigationOptions = {
        title: 'CorrectAnswerScreen'
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.base}>
                <Text>Correct view </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});
