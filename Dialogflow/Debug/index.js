const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Welcome Intent', (conv) =>{
 	var speechOutput = "Welcome to Celine's Trivia. Answer by saying something like: " +
    "' Celine's favorite blank is blank' " + "First Question: "
    "What is Celine's favorite color? ";
	conv.tell(speechOutput)
});

app.intent('My First Intent', (conv,{color}) =>{
	var colorAnswer = "yellow"
    var speechOutput; 
    if(colorAnswer == color){
      speechOutput = "You are correct!";
    }
    else{
       "Sorry, better luck next time!";
    }
    speechOutput += " Next Question: What is Celine's favorite sport?";
	conv.ask(speechOutput); 
}); 

app.intent('Favorite Sport Intent', (conv,{color}) =>{
	var sportAnswer = "basketball"
    var speechOutput; 
    if(colorAnswer == sport){
      speechOutput = "Nice! You really know her!";
    else
      "Yikes, maybe you should pay more attention"; 
    }
    speechOutput += " Final Question: What is Celine's favorite snack?";
	conv.ask(speechOutput); 
}); 

app.intent('Favorite Snack Intent', (conv,{snack}) =>{
    var snackAnswer = cheez its
    var speechOutput; 
    if(snackAnswer = userGuess){
       speechOutput = "CORRECT! You are a Celine expert";
    }
    else if(snackAnswer)
       spechOutput = "Sorry, better luck next time!"; 
    }
    speechOutput += " Great job getting through this debug! Hope it wasn't too difficult (:";
	conv.ask(speechOutput); 
}); 

app.intent('Default Fallback Intent', (conv) =>{
	conv.ask("I didn't get that"); 
	conv.ask("I'm sorry, can you try again?"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
