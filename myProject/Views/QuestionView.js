import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, FlatList, Text } from 'react-native';

export default class QuestionsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
               data:[
                    {
                        totalCountQuestions: "05",
                        username: "super",
                        password: "man",
                        isCredentialsOK: "true",
                        isGameFinished: "false",
                        isNewQuestion: "false",
                        isReadyToPlay: "false",
                        questionId: "01",
                        finalScore: "01",
                        questionLabel: "Quelle est la couleur du cheval blanc d'Henri 4 ? ",
                        Answer1: "bleu",
                        Answer2: "noir",
                        Answer3: "orange",
                        Answer4: "blanc",
                        correctAnswer: "blanc",
                    }
               ]
        }
    }

    render() {
        return (
            <View  style={styles.base}>
            <FlatList
                data = { this.state.data}
                renderItem = {({item}) =>
                <Text> { item.questionLabel } </Text>
            }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 10,
        padding: 10,
        textAlign: 'center',
    }
});


{/*
<Image source = {require('./assets/cheval.png')}  style = {{ width: 200, height: 200 }} />
*/}
