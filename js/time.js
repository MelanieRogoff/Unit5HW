//Display the current date/time

$("#currentDay").text(moment().format("dddd, MMMM Do, hh:mm a"));


//This references the Save Button
//Step 1 for Save Button: Make it clickable 
//Step 2: Make an if statement to check for clicking 
    //If clicked, make an if statement that FIRST checks to see if user input text into the textarea in a specific time slot 
         //If they did input text, store the conciding time and user's text input into localStorage
    //If NOT clicked, create an alert saying that the user must hit save -- MAY REMOVE THIS  IDEA
//Step 4: Have that localStorage information stay displayed, even with page refresh
//$(".pumpkin")


//This references the text input field - we will need to make this respond to entries
//$(".namers")

//TimeBlocks -- must change colors based on time of day, need to use if statement for checks

    // const pastTimeBlock -- Create a check to see if the current timeblock events already happened, and if they have, make them green. If not, no color change.
    // const currentTimeBlock -- Create a check to see if the current timeblock events are happening at the present time, and if they are, have them be blue. If not, no color change.
    // const futureTimeBlock  -- Create a check to see if the future timeblock events are going to happen after the present time, and if they are, have them be red. If not, no color change.
    // const emptyTimeBlock // Create a check (if statement) to see if there's any TimeBlocks with no information. If no infromation, turn the text area gray. If not, no color change.
