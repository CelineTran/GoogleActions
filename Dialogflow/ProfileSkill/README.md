# My Profile


Key Idea(s): Entity (also known as slots in Alexa)


## Setup: Same as ‘Hello World’

1. Add NameIntent 
2. Under “Actions and Parameters” add new parameter 
      Parameter Name: “Name” 
      Entity(Slot Type): sys.given-name
      Check “Required” box 
      Note: Default entity: sys.any
3. Add “Training Phrases”
      Ex. “my name is Name” 
      Click on “Name” because it represents the parameter and choose: “sys:given-name:Name” (this will link that to the parameter) 
4. Enable webhook fulfillment 
5. Save 
6. Repeat for the next “ColorIntent” and “AnimalIntent” 

## Coding (Fulfillment):

1. Enable the “Inline Editor”
2. Copy/Paste OR just work directly on the original default code (ask Richard)
3. Within the Welcome Function, edit the default string to say “Welcome to my Profile Skill”
4. Change “My First Intent” to “Name Intent” 
      Add in the parameters next to “conv”, the parameter Name in curly braces 
      (conv) -> (conv, {Name})
5. Copy and paste that 2 times
      Change the name and parameters to correspond to our new intents (Name, Color, Animal) 
6. Within the “Name Intent” add a variable on the next line 
      var userName = Name // this gets the value of our parameter 
      Change the speechOutput = “Hi ” + userName + “ nice to meet you! What is your favorite color?” 
7. Do the same to the Color and Animal Intent 
      Note: If you want the Animal Intent to be your final intent, change “conv.ask” to “conv.close”
8. Finally, click deploy (*Note: it may take a minute or two)
