import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class WelcomeLoggedView extends Component {
    render() {
        return (
            <View style={styles.base}>
                <Text>Bienvenue !</Text>

                <Text>Merci d'attendre le début de la partie ...</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
