//Variable Declarations
let currently = $("#currentDay"); //Where the current day is displayed
let nowHour = moment().format("H"); //Grabbing the current time specifically in hour format, ie: 1pm

setInterval(() => { //"Fat arrow" syntax -- this fx makes sure time moves
    let now = moment(); //Starts the interval when page loads
    let date = now.format("dddd, MMMM Do, hh:mm a"); //Proper format for date, month, day of, hours, and minutes
    currently.text(date); //Display the current date/time
}, 1000);

$(".saver").click(function () { //When Save button is clicked ... 
    $('input[type="text"]').each(function () { //For each input type that is text ...
        const id = $(this).attr('id'); //Grab this input text's id
        const value = $(this).val(); //Get the value of this and save it into the const value
        localStorage.setItem(id, value); //Save the input text's id (id) and the value of this (value) into localStorage
    });
});

$('input[type="text"]').each(function () { //For each input type that is text ...
    const getting = $(this).attr('id'); //This says that for each input of text, grab this input text's id
    const letsGrab = localStorage.getItem(getting); //Put that id in localStorage to grab the value
    document.getElementById(getting).value = letsGrab; //This says that the empty value in the id is being replaced by what's in letsGrab
});

//Changing colors depending on time of day
colorChecks(9, "#nineAm"); //Calling the colorChecks function and passing the arguments of 9 for 9am and its corresponding id
colorChecks(10, "#tenAm"); // This does the same function as line 26
colorChecks(11, "#eleven"); // This does the same function as line 26
colorChecks(12, "#noon"); // This does the same function as line 26
colorChecks(13, "#onePm"); // This does the same function as line 26
colorChecks(14, "#twoPm"); // This does the same function as line 26
colorChecks(15, "#threePm"); // This does the same function as line 26
colorChecks(16, "#fourPm"); // This does the same function as line 26
colorChecks(17, "#fivePm"); // This does the same function as line 26

function colorChecks(time, theId) { //Have to pass two parameters into this function because we're checking for specific things -- time and theId are arbitrary, BUT when we call the function, we replace time with the time we desire (ie 9, 10, etc), and we replace theId with its corresponding id (so for 9am, its corresponding id is #nineAm)
    if (nowHour > time) { //If the current hour is GREATER than the time specified (ie current hour is 3pm, and time is 9am)
        $(theId).addClass("past"); //9am in this case would be in the past, so set its coloring to past class
    }
    if (nowHour < time) { // If the current hour is LESS than the time specified (ie current hour is 8am, time is 9am)
        $(theId).addClass("future"); // 9am in this case would be in the future, so set its coloring to future class
    }
    if (nowHour == time) { //If the current hour is the SAME as time specified (ie current hour is 9am, time is 9am; can't do 3 equals signs because it'll look SPECIFICALLY for 9:00 instead of 9:02, etc)
        $(theId).addClass("present"); // 9am in this case is in the present, so set its color to present
    }
}