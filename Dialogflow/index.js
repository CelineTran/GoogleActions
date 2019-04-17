const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Default Welcome Intent', conv =>{
	conv.ask("Hello World"); 
});

app.intent('My First Intent', conv =>{
	var speechOutput = "This is my very first intent"; 
	conv.ask(speechOutput); 
}); 

app.intent('Default Fallback Intent', conv =>{
	conv.ask("I didn't get that"); 
	conv.ask("I'm sorry, can you try again?"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
