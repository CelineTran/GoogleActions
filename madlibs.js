'use strict'; 

const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow({debug: true}); 

app.intent('Default Welcome Intent', conv =>{
	conv.ask("Welcome to Celine's Madlibs "); 
  	conv.ask("First give me a noun"); 
});

app.intent('Noun Intent', (conv,{Noun}) =>{
  	conv.data.noun = Noun.value; 
	conv.ask("Cool now give me a name"); 
}); 

app.intent('Name Intent', (conv,{Name}) =>{
  	conv.data.name = Name.value; 
	conv.ask("Sweet! Now a place"); 
}); 

app.intent('Place Intent', (conv,{Place}) =>{
  	conv.data.place = Place.value; 
	conv.ask("Got it. Tell me when you're ready to hear the story"); 
}); 

app.intent('Story Intent', conv =>{
  	var speechOutput = "One day when " + conv.data.name + " was walking through the " + conv.data.place + " when suddently, a " + conv.data.noun + " appeared!!";
	var cheer = "<audio src= 'https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg'></audio>"; 
  	conv.close(speechOutput + " The End" + cheer);  
}); 

app.intent('Default Fallback Intent', conv =>{
	conv.ask("Uh-Oh's"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
