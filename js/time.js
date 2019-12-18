$(document).ready(function() {
    //displays();
})

//Variable Declarations
let currently = $("#currentDay");
const nameEl = $(".namers");
const userInput = JSON.parse(localStorage.getItem('textinput')) || [];
//console.log(userInput);

setInterval(() => { //"Fat arrow" syntax -- this fx makes sure time moves
    const now = moment(); //Starts the interval when page loads
    const date = now.format("dddd, MMMM Do, hh:mm a");
    currently.text(date);
}, 1000);


//When Save button is clicked ... 
$(".saver").on('click', function() {  
    const letsTry = ($(this).siblings("input").val()); // Text input of EACH timeslot
    const stTry = JSON.stringify(letsTry);
    const stringer = JSON.stringify(values);
    //arrayname.push below cuz push is on the array
    userInput.push(stTry, stringer);
    localStorage.setItem('textinput', JSON.stringify(userInput));  //Saves to localStorage - push into the array yo u want to stringify
    displays();
});
 
function displays () {
    alert("HALLO TEST");
}

//Create array of objects SPECIFICALLY for timeslots
const values = [
    {time: "9am", value: "stuff"},
    {time: "10am", value: "stuff"},
    {time: "11am", value: "stuff"},
    {time: "12pm", value: "stuff"},
    {time: "1pm", value: "stuff"},
    {time: "2pm", value: "stuff"},
    {time: "3pm", value: "stuff"},
    {time: "4pm", value: "stuff"},
    {time: "5pm", value: "stuff"},
];

//TimeBlocks -- must change colors based on time of day, use if statement for checks

    // const pastTimeBlock -- Create check to see if current timeblock events already happened, and if have, make them green. If not, no color change.
    // const currentTimeBlock -- Create a check to see if the current timeblock events are happening at the present time, and if they are, have them be blue. If not, no color change.
    // const futureTimeBlock  -- Create a check to see if the future timeblock events are going to happen after the present time, and if they are, have them be red. If not, no color change.
    // const emptyTimeBlock // Create a check (if statement) to see if there's any TimeBlocks with no information. If no infromation, turn the text area gray. If not, no color change.
