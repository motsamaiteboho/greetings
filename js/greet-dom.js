// get a reference to the textbox where the name is to be entered
const fname = document.querySelector(".fname");
//get a reference to the greet button
const greetMeBtn = document.querySelector(".greetMeBtn");
const resetCouBtn = document.querySelector(".resetCouBtn");

const greetingsElem = document.querySelector(".count")
const greetinalangElem = document.querySelector(".greeting")

var greetings = GreetingTheUSer();

if (localStorage['namesGreeted']) {
    var count = (localStorage['namesGreeted'].split(',').length - 1)
    greetingsElem.innerHTML = count;
}

function GreetingUser(){
    
    // get a reference to the language radi buttons
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn)
    {
        if (!fname.value.match(/^[^a-zA]+$/) && fname.value !== "")
            greetings.IncrementCounter(fname.value);
        localStorage['namesGreeted'] = greetings.greetingNames();
        greetingsElem.innerHTML = greetings.greetingCounter();
        greetinalangElem.innerHTML =  greetings.greetUser(checkedRadioBtn.value);
    }
    else
    {
        greetinalangElem.innerHTML = "Please, select your prefered language";
    }
}
greetMeBtn.addEventListener('click',GreetingUser);

function resetCounter(){
    localStorage['namesGreeted'] = "";
    greetings.resetCounter();
    greetingsElem.innerHTML = greetings.greetingCounter();
}
resetCouBtn.addEventListener('click',resetCounter);