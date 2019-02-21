
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
    }

    static showCorrectAnswer(){

    }

    static checkBackButtonIsPressed(){

    }

    static checkGameIsFinished(){

    }



}

export default GameHelper;