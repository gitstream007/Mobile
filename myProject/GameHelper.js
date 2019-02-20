

class GameHelper {

    constructor() {}

    static answers = [];

    static checkCredentials(){

    }

    //TODO
    static checkValidAnswer(){
/*        if ( == ) {
            return true;
        } else {
            return false;
        }*/
    }

    static waitNewQuestion(){

    }

    static getProgressiveScore(){
       let countCorrectAnswers = 0;
        for (let i = 0; i < this.answers.length; i++) {
            if (this.answers[i]) {
                countCorrectAnswers ++;
            }
        }
        return countCorrectAnswers;
    }

    static getFinalScore(){

    }

    static showCorrectAnswer(){

    }

    static checkBackButtonIsPressed(){

    }

     static checkGameIsFinished(){

    }



}

export default GameHelper;