//Variable Declarations
const userInput = '';
let currently = $("#currentDay");

setInterval(() => { //This is the "fat arrow" function syntax -- this function makes sure that time moves
    const now = moment(); //Starts the interval the moment page loads
    const date = now.format("dddd, MMMM Do, hh:mm a");
    currently.text(date);
}, 1000);

//When Save button is clicked ... 
$(".saver").on("click", function() {
    event.preventDefault();
    console.log($(".namers").val());
    //If clicked, make if st8ment that 
            // - Checks 2 see if user input text into textarea in specific time slot 
            //If yes,  store coinciding time & user's text input in2 localStorage
    //If NOT clicked, create alert saying user must hit save -- MAY REMOVE THIS  IDEA
//Have that localStorage information stay displayed, even with page refresh

}); 


//Below code references text input field - need to make this respond to entries
//$(".namers")

//TimeBlocks -- must change colors based on time of day, use if statement for checks

    // const pastTimeBlock -- Create check to see if current timeblock events already happened, and if have, make them green. If not, no color change.
    // const currentTimeBlock -- Create a check to see if the current timeblock events are happening at the present time, and if they are, have them be blue. If not, no color change.
    // const futureTimeBlock  -- Create a check to see if the future timeblock events are going to happen after the present time, and if they are, have them be red. If not, no color change.
    // const emptyTimeBlock // Create a check (if statement) to see if there's any TimeBlocks with no information. If no infromation, turn the text area gray. If not, no color change.
