import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as navigation from "react-navigation";

import {FlatGrid} from "react-native-super-grid";
import ConstantsColorsCodes from "../ConstantsColorsCodes";
import CorrectAnswerScreen from "./CorrectAnswerScreen";
import QuestionsView from "./QuestionView";
import GameService from "../GameService";

let isNewQuestion = true;
let actualQuestionId;

export default class QuestionScreen extends Component {
    static navigationOptions = {
        title: 'QuestionScreen'
    };
    constructor(props) {
        super(props);
        this.state = {
            valueToSave: '',
            count: 0,
            data:
                {
                    totalCountQuestions: "05",
                    username: "super",
                    password: "man",
                    credentialsOK: "true",
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
        }
    }

    handleClick(value) {
        this.setState({count: this.state.count+1});
        console.log("handleClick :" + value);
        this.setState({valueToSave: value});
        actualQuestionId = this.state.data.questionId;
        let nextQuestionId = parseInt(actualQuestionId) + 1;

        console.log("actualQuestionId :" + actualQuestionId);
        console.log("nextQuestionId :" + nextQuestionId);
        console.log("correctAnswer : " + this.state.data.correctAnswer);
        console.log("questionId : " + this.state.data.questionId);

        if (this.state.count < this.state.data.questionId) {
            if (value === this.state.data.correctAnswer) {
                console.log("bien répondu ");
                let partialScore = 1;
                GameService.getProgressiveScore(partialScore, this.state.data.questionId);
                this.props.navigation.navigate('CorrectAnswerScreen',{tempScore1: 99});
              //  isNewQuestion = false;
            }
            else
                {
                console.log("pas bien répondu !");
                let partialScore = 0;
                GameService.getProgressiveScore(partialScore, this.state.data.questionId);
                this.props.navigation.navigate('IncorrectAnswerScreen',{tempScore2: 66});
            }
            GameService.waitNewQuestion(this.state.data.isNewQuestion);
            GameService.checkGameIsFinished(this.state.data.isGameFinished, this.state.data.finalScore);
           // isNewQuestion = false;
           // actualQuestionId = nextQuestionId
            console.log("actualQuestionId :" +actualQuestionId)
        }
        else
        {
            console.log("déjà répondu à la question ");
        };
    }
    render() {
        const { navigation } = this.props;
        const actualUsername = navigation.getParam('actualUsername');

        const items = [
            { name: this.state.data.Answer1, code: ConstantsColorsCodes.INCORRECT_RED }, { name: this.state.data.Answer2, code: ConstantsColorsCodes.MY_BLUE },
            { name: this.state.data.Answer3, code: ConstantsColorsCodes.MY_ORANGE }, { name: this.state.data.Answer4, code: ConstantsColorsCodes.CORRECT_GREEN },
        ];

        return (
            <Grid style={styles.grid}>
                <Row>
                    <TouchableOpacity  style={styles.test0}>
                        <View style={styles.questionView}>
                            <QuestionsView/>
                        </View>
                    </TouchableOpacity>
                </Row>
                <Row>
                    <FlatGrid
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.handleClick(item.name)}>
                                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
{/*                    <View>
                        <Text>{JSON.stringify(actualUsername)}</Text>
                    </View>*/}
                </Row>
      </Grid>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    questionView: {
        textAlignVertical: 'bottom',
    },
    test0: {
        height: '90%',
        width: '95%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 125,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    itemName2: {
        fontSize: 50,
        color: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
});