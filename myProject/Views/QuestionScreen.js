import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as navigation from "react-navigation";

import {FlatGrid} from "react-native-super-grid";
import ConstantsColorsCodes from "../ConstantsColorsCodes";
import CorrectAnswerScreen from "./CorrectAnswerScreen";
import QuestionsView from "./QuestionView";
import GameService from "../GameService";
import APIService from "../API/APIService";

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
            data: [],
        }
    }

    componentWillMount(): void {
        APIService.FetchFunction()
            .then(response => {
                console.log('response1' +response);
                this.setState({
                    isLoading: false,
                    data: response.data});
                return Promise.resolve()
            })
            .catch(error => console.log(error));
        }

    handleClick(value) {let data2 = this.state.data[0];
        this.setState({count: this.state.count+1});
        console.log("handleClick :" + value);
        this.setState({valueToSave: value});
        actualQuestionId = this.state.data[0].questionId;
        let nextQuestionId = parseInt(actualQuestionId) + 1;

        console.log("actualQuestionId :" + actualQuestionId);
        console.log("nextQuestionId :" + nextQuestionId);
        console.log("correctAnswer : " + this.state.data[0].correctAnswer);
        console.log("questionId : " + this.state.data[0].questionId);
        console.log(" le state "+this.state.data[0].correctAnswer);


        if (this.state.count < this.state.data[0].questionId) {
            if (value === this.state.data[0].correctAnswer) {
                console.log("bien répondu ");
                let partialScore = 1;
                GameService.getProgressiveScore(partialScore, this.state.data[0].questionId);
                this.props.navigation.navigate('CorrectAnswerScreen',{tempScore1: 99});
              //  isNewQuestion = false;
            }
            else
                {
                console.log("pas bien répondu !");
                let partialScore = 0;
                GameService.getProgressiveScore(partialScore, this.state.data[0].questionId);
                this.props.navigation.navigate('IncorrectAnswerScreen',{tempScore2: 66});
            }
            GameService.waitNewQuestion(this.state.data[0].isNewQuestion);
            GameService.checkGameIsFinished(this.state.data[0].isGameFinished, this.state.data[0].finalScore);
           // isNewQuestion = false;
           // actualQuestionId = nextQuestionId
            console.log("actualQuestionId :" +actualQuestionId)
        }
        else
        {
            console.log("déjà répondu à la question ");
        };
    }

    //keyExtractor = (item, index) => index

    render() {
        console.log("enters the QuestionScreen render ");

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
                       // data = { this.state.data}
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