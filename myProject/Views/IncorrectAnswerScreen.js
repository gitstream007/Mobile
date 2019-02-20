import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


export default class IncorrectAnswerScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.base}>
                <Text>Incorrect view </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc0052'
    }
});
