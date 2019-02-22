import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, FlatList, TouchableOpacity,  TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import {FlatGrid} from "react-native-super-grid";
import ConstantsColorsCodes from "../ConstantsColorsCodes";
import CorrectAnswerScreen from "./CorrectAnswerScreen";
import QuestionsView from "./QuestionView";
import GameHelper from "../GameHelper";

let isNewQuestion = true;
let actualQuestionId;


// TODO la couleur doit changer et rester changée à l'appui d'un bouton réponse

export default class QuestionScreenTest extends Component {
    static navigationOptions = {
        title: 'QuestionScreenTest'
    };
    constructor(props) {
        super(props);
        this.state = {
            valueToSave: '',
            count: 0,
            data:
                {
                    totalCountQuestions:"10",
                    gameIsFinished:"false",
                    serverQuestionId:"01",
                    finalScore:"10",
                    proposedAnswer1:"bleu",
                    proposedAnswer2:"noir",
                    proposedAnswer3:"orange",
                    proposedAnswer4:"blanc",
                    correctAnswer:"blanc",
                }
        }
    }

    handleClick(value) {
        this.setState({count: this.state.count+1});
        console.log("handleClick :" + value);
        this.setState({valueToSave: value})
        actualQuestionId = this.state.data.serverQuestionId;
        let nextQuestionId = parseInt(actualQuestionId) + 1;
        console.log("actualQuestionId :" + actualQuestionId);
        console.log("nextQuestionId :" + nextQuestionId);

        console.log("correctAnswer : " + this.state.data.correctAnswer);
        console.log("serverQuestionId : " + this.state.data.serverQuestionId);

        if (this.state.count < this.state.data.serverQuestionId) {
            if (value === this.state.data.correctAnswer) {
                console.log("bien répondu ");
                let partialScore = 1;
                GameHelper.getProgressiveScore(partialScore, this.state.data.serverQuestionId);
                this.props.navigation.navigate('CorrectAnswerScreen');
              //  isNewQuestion = false;
            } else {
                console.log("pas bien répondu !")
                let partialScore = 0;
                GameHelper.getProgressiveScore(partialScore, this.state.data.serverQuestionId);
            }

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
        const items = [
            { name: this.state.data.proposedAnswer1, code: ConstantsColorsCodes.INCORRECT_RED }, { name: this.state.data.proposedAnswer2, code: ConstantsColorsCodes.MY_BLUE },
            { name: this.state.data.proposedAnswer3, code: ConstantsColorsCodes.MY_ORANGE }, { name: this.state.data.proposedAnswer4, code: ConstantsColorsCodes.CORRECT_GREEN },
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
    or: {
        backgroundColor: 'black',
        flex: 0.5,
    },
    test0: {
        height: '90%',
        width: '95%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    test1: {
        backgroundColor: ConstantsColorsCodes.INCORRECT_RED,
        height: '90%',
        width: '90%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    test2: {
        backgroundColor: ConstantsColorsCodes.MY_BLUE,
        height: '90%',
        width: '90%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    test3: {
        backgroundColor: ConstantsColorsCodes.MY_ORANGE,
        height: '90%',
        width: '90%',
        borderRadius: 30,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    test4: {
        backgroundColor: ConstantsColorsCodes.CORRECT_GREEN,
        height: '90%',
        width: '90%',
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
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});