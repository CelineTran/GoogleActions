const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Default Welcome Intent', conv =>{
	conv.ask("Hello World"); 
});

app.intent('My First Intent', conv =>{
	conv.ask("This is my very first intent"); 
}); 

app.intent('Default Fallback Intent', conv =>{
	conv.ask("Uh-Oh's"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
