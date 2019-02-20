import React, { Component } from 'react';
import { View, Button, Image, StyleSheet, FlatList, Text } from 'react-native';


export default class QuestionsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
               data:[
                    {
                        totalCountQuestions:"10",
                        username:"super",
                        password:"man",
                        credentialsOK:"true",
                        gameIsFinished:"false",
                        serverQuestionId:"01",
                        finalScore:"10",
                        questionLabel:"Quelle est la couleur du cheval blanc d'Henri 4 ? ",
                        proposedAnswer1:"bleu",
                        proposedAnswer2:"noir",
                        proposedAnswer3:"orange",
                        proposedAnswer4:"blanc",
                        correctAnswer:"proposedAnswer4",
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
        //backgroundColor: 'green',
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
