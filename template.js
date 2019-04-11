const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Default Welcome Intent', conv =>{
	conv.ask("Why yello Jonny!"); 
});

app.intent('Hello Intent', conv =>{
	conv.ask("yellow yellow!"); 
}); 

app.intent('Default Fallback Intent', conv =>{
	conv.ask("Uh-Oh's"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
