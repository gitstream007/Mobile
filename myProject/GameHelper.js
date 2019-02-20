
let isReceivedScore = false;
let tempCorrectAnswers = 0;
let finalScore = 0;

class GameHelper {

    constructor() {}

    static answers = [];

    static checkCredentials(){

    }

    static waitNewQuestion(){

    }

    static getProgressiveScore(partialScore, isNewQuestion){
        let tempCorrectAnswers = partialScore;
        if(tempCorrectAnswers != 0 && isNewQuestion) {
            getFinalScore(tempCorrectAnswers);
            console.log("tempCorrectAnswers :"+tempCorrectAnswers);
        }
    }

    static getFinalScore(tempCorrectAnswers){
            if(tempCorrectAnswers)
            { finalScore = finalScore + tempCorrectAnswers
            console.log("finalScore :" +finalScore);
            }
    }

    static showCorrectAnswer(){

    }

    static checkBackButtonIsPressed(){

    }

     static checkGameIsFinished(){

    }



}

export default GameHelper;