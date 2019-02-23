import React, { Component } from 'react';

let isReceivedScore = false;
let tempCorrectAnswers = 0;
let finalScore = 0;

export default class GameHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static checkCredentials(){

    }

    static waitNewQuestion(isNewQuestion){
        if(isNewQuestion)
        {
            // TODO
        }
    }

    static getProgressiveScore(partialScore){
        let tempCorrectAnswers = partialScore;
        console.log("tempCorrectAnswers :"+tempCorrectAnswers);

        if(tempCorrectAnswers != 0) {
            console.log("tempCorrectAnswers :"+tempCorrectAnswers);
            GameHelper.getFinalScore(tempCorrectAnswers);
        }
    }

    static getFinalScore(tempCorrectAnswers){
        console.log("finalScore ::::::" );

        if(tempCorrectAnswers)
        { finalScore = finalScore + tempCorrectAnswers
            console.log("finalScore :" +finalScore);
        }
        return finalScore;
    }

    static checkBackButtonIsPressed(){

    }

    static checkGameIsFinished(gameIsFinished, finalScore){
        // TODO
        // this.props.navigation.navigate('GameIsFinishedView', {finalScore: finalScore}););
    }



}
