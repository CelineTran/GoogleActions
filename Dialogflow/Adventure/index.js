const functions = require('firebase-functions'); 
const {dialogflow} = require('actions-on-google'); 

const app = dialogflow(); 

app.intent('Default Welcome Intent', (conv) =>{
  	var speechOutput = "You have found Celine's Adventure game! ";
    speechOutput += "Let's begin our journey! "; 
    speechOutput += "It is a sunny Friday afternoon and you are walking home from school after your favorite class, Alexa, of course. "; 
    speechOutput += "You're excited to go home because your cousins are visiting for the weekend. "; 
    speechOutput += "As you cross the street you notice the McDonald's and you suddenly feel hungry. "; 
    speechOutput += "Do you go grab some chicken nuggets or head home because your cousins are waiting?"; 
	conv.ask(speechOutput); 
});

app.intent('McDonalds Intent', (conv) =>{
	var speechOutput = "Ahhhhh you've succumbed to your stomach and start walking towards McDonalds ";
    speechOutput += "Upon entering, you gaze at the menu when suddenly an ad on one of the walls catches your attention. "; 
 	speechOutput += "You quickly walk over and read that there's a challenge going on. "; 
    speechOutput += "The ad says that there's a $300 prize to whoever can tell the best story. "; 
    speechOutput += "You think to yourself, I can either go home right now and start brainstorming or I can buy my food "; 
    speechOutput += "What do you do? "; 
	conv.ask(speechOutput); 
}); 

app.intent('Home Intent', (conv) =>{
    var speechOutput = "Excited to see your cousins, you head home. ";
    speechOutput += "After what seems like the longest walk of your life, you finally end up at the front door of your house. "; 
    speechOutput += "You turn the knob like you always do but wait... Why isn't the door opening? "; 
    speechOutput += "A little confused, you knock. Maybe your cousins locked it. "; 
    speechOutput += "No one answers. Hmm you think. Maybe they just went out for a little bit and they'll be back soon. "; 
    speechOutput += "Do you sit and wait or call the police?";
	conv.ask(speechOutput); 
}); 

app.intent('Default Fallback Intent', (conv) =>{
	conv.ask("I didn't get that"); 
	conv.ask("I'm sorry, can you try again?"); 
}); 
  
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app); 
