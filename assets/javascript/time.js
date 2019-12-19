//Variable Declarations
let currently = $("#currentDay"); //Where the current day is displayed
let nowHour = moment().format("H");

setInterval(() => { //"Fat arrow" syntax -- this fx makes sure time moves
    let now = moment(); //Starts the interval when page loads
    let date = now.format("dddd, MMMM Do, hh:mm a");
    currently.text(date);
}, 1000);

//When Save button is clicked ... 
$(".saver").click(function() {
    $('input[type="text"]').each(function() {
        const id = $(this).attr('id'); 
        const value = $(this).val();
        localStorage.setItem(id, value);
        });
    });

$('input[type="text"]').each(function(){
    const getting = $(this).attr('id'); //This says that for each input of text, grab this input text's id
    const letsGrab = localStorage.getItem(getting); //Put that id in localStorage to grab the value
    document.getElementById(getting).value = letsGrab; //This says that the empty value in the id is being replaced by what's in letsGrab
});

//Changing colors depending on time of day
colorChecks(9, "#nineAm");
colorChecks(10, "#tenAm");
colorChecks(11, "#eleven");
colorChecks(12, "#noon");
colorChecks(13, "#onePm");
colorChecks(14, "#twoPm");
colorChecks(15, "#threePm");
colorChecks(16, "#fourPm");
colorChecks(17, "#fivePm");

function colorChecks(time, theId) {
    if (nowHour > time) {
        $(theId).addClass("past"); //This is saying that, for example, if the current time is 2:31 and time is 9am, 9am is in the past. 
    }
    if (nowHour < time) {
        $(theId).addClass("future");
    }
    if (nowHour == time) {
        $(theId).addClass("present");
    }
}