(function(){ 
    "use strict";

    // listen for the submission of the form
 document.getElementById("myform").addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    const formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    const words = [];

    //loop through the fields and add the words to the array, one at a time.
    for( const i=0; i<formData.length; i++){
        words.push(formData[i].value);    
    }
    //You can see the array in the console, if you want...
    console.log(words);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(words);

});

//This function takes an array input, then constructs the madlib, peppering
//in the user's words where necessary.
function makeMadLib(theWords){
    const madlib = `<h2>Once upon a time...</h2> <p> An evil witch turned ${theWords[0]} into a ${theWords[2]}. In order to break the spell, ${theWords[0]} needed to ${theWords[3]} their one true love. So ${theWords[0]} ${theWords[4]} set out on a journey to find that one true love. After many days of being a ${theWords[2]}, ${theWords[0]} finally met ${theWords[1]}.
    <br><br>
    ${theWords[1]} was ${theWords[5]} and ${theWords[6]}, and ${theWords[0]} thought it was love at first sight. However, ${theWords[1]} had the ability to see the future and unfortunately revealed that ${theWords[0]} will never find their one true love. And so ${theWords[0]} lived out the rest of their life as a ${theWords[2]}.</p>
    <br><br>
    <h1>The End</h1>
    
    <a href="madlib.html">Tell a Different Story!</a>`;

  

    //Get the madlib container
    const mlContainer = document.getElementById('madlib');
    const formContainer = document.getElementById('myform');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
    formContainer.setAttribute("class", "invisible");
}

/*******************************
TO DO:
1. Add interesting graphics/fun madlib content/theme
2. Change styling (add fonts from google fonts, colors, etc)
3. Change the way the madlib appears (add a css animation?)
4. Adjust JS to suit your madlib
5. Refactor JS (put in external script file, put in enclosure, 
change var to const or let, etc.)
6. Have fun!
*********************************/

    
}());
 
 
 