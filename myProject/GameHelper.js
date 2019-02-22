
let isReceivedScore = false;
let tempCorrectAnswers = 0;
let finalScore = 0;

class GameHelper {

    constructor() {}

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
    }

    static showCorrectAnswer(){
        // TODO marche pas
       // this.props.navigation.navigate('CorrectAnswerScreen');
    }

    static showIncorrectAnswer(){
        // TODO marche pas
       // this.props.navigation.navigate('IncorrectAnswerScreen');
    }

    static checkBackButtonIsPressed(){

    }

    static checkGameIsFinished(gameIsFinished, finalScore){
        // TODO marche pas
        // this.props.navigation.navigate('GameIsFinishedView', {finalScore: finalScore}););
    }



}

export default GameHelper;