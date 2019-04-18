const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Default Welcome Intent', conv => {
	conv.ask("Welcome to my profile! First tell me your name."); 
});

app.intent('Name Intent', (conv, {Name}) => {
  	var userName = Name; 
  	var speechOutput = "Hi " + userName + " nice to meet you! What is your favorite color?"; 
	conv.ask(speechOutput); 
}); 

app.intent('Color Intent', (conv, {Color}) => {
  	var userColor = Color; 
  	var speechOutput = "Cool! I think " + userColor + " is a nice color too!"; 
  	speechOutput += "What is your favorite animal?"; 
  	conv.ask(speechOutput); 
}); 

app.intent('Animal Intent', (conv, {Animal}) => {
  	var userAnimal = Animal; 
  	var speechOutput = "Yikes I don't really like " + userAnimal; 
	  conv.ask(speechOutput); 
}); 

app.intent('Default Fallback Intent', conv =>{
	conv.ask("I didn't get that"); 
	conv.ask("I'm sorry, can you try again?"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
