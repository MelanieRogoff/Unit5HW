//Variable Declarations
const userInput = '';
let currently = $("#currentDay");
const dayTimes = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

setInterval(() => { //This is the "fat arrow" function syntax -- this function makes sure that time moves
    const now = moment(); //Starts the interval the moment page loads
    const date = now.format("dddd, MMMM Do, hh:mm a");
    currently.text(date);
}, 1000);

//When Save button is clicked ... 
$(".saver").on("click", function() {  //saver = save button class
    const letsTry = ($(this).siblings("input").val()); // See  text input of EACH timeslot
    localStorage.setItem('textinput', letsTry);  //Saves to localStorage
    displays();
});
//Have localStorage information stay displayed, even with page refresh

function displays () {
    const stuff = localStorage.getItem('textinput');
    $(".namers").text('textinput');
}
//TimeBlocks -- must change colors based on time of day, use if statement for checks

    // const pastTimeBlock -- Create check to see if current timeblock events already happened, and if have, make them green. If not, no color change.
    // const currentTimeBlock -- Create a check to see if the current timeblock events are happening at the present time, and if they are, have them be blue. If not, no color change.
    // const futureTimeBlock  -- Create a check to see if the future timeblock events are going to happen after the present time, and if they are, have them be red. If not, no color change.
    // const emptyTimeBlock // Create a check (if statement) to see if there's any TimeBlocks with no information. If no infromation, turn the text area gray. If not, no color change.
