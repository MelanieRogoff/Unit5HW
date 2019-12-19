//Variable Declarations
let currently = $("#currentDay");


setInterval(() => { //"Fat arrow" syntax -- this fx makes sure time moves
    let now = moment(); //Starts the interval when page loads
    let date = now.format("dddd, MMMM Do, hh:mm a");
    currently.text(date);
}, 1000);


//Changing colors depending on time of day

function changer ()





//When Save button is clicked ... 
$(".saver").click(function() {
    $('input[type="text"]').each(function() {
        const id = $(this).attr('id');
        const value = $(this).val();
        localStorage.setItem(id, value);
        });
    });

//TimeBlocks -- must change colors based on time of day, use if statement for checks

    // const pastTimeBlock -- Create check to see if current timeblock events already happened, and if have, make them green. If not, no color change.
    // const currentTimeBlock -- Create a check to see if the current timeblock events are happening at the present time, and if they are, have them be blue. If not, no color change.
    // const futureTimeBlock  -- Create a check to see if the future timeblock events are going to happen after the present time, and if they are, have them be red. If not, no color change.
    // const emptyTimeBlock // Create a check (if statement) to see if there's any TimeBlocks with no information. If no infromation, turn the text area gray. If not, no color change.
