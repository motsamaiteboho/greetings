//get reference 
// get a reference to the textbox where the name is to be entered
const fname = document.querySelector(".fname");
//get a reference to the greet button
const greetMeBtn = document.querySelector(".greetMeBtn");

const greetingsElem = document.querySelector(".count")
const greetinalangElem = document.querySelector(".greeting")

// add a global variable
var namesGreeted = {};
var greetingsCounter = 0;
greetMeBtn.addEventListener('click', function () {
    // get a reference to the language radi buttons
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    var userName =  fname.value;
    //when the greet button is pressed check if this user was already greeted before
    //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
    if (namesGreeted[userName] === undefined) {
        greetingsCounter++;
        //add an entry for the user that was greeted in the Object Map
        namesGreeted[userName] = 0;
        //update the DOM to display the counter
        greetingsElem.innerHTML = greetingsCounter;
    }

    if (checkedRadioBtn)
    {
        var lang = checkedRadioBtn.value;
        if(lang == "english" )
        {
            greetinalangElem.innerHTML = "Hello, " + userName; 
        }
        else if(lang == "afrikaans"){
            greetinalangElem.innerHTML = "Hallo, " + userName; 
        }
        else if(lang == "isiXhosa"){
            greetinalangElem.innerHTML = "Mholweni, " + userName; 
        }
        
    }
});