// get a reference to the textbox where the name is to be entered
const fname = document.querySelector(".fname");
//get a reference to the greet button
const greetMeBtn = document.querySelector(".greetMeBtn");
const resetCouBtn = document.querySelector(".resetCouBtn");

const greetingsElem = document.querySelector(".count")
const greetinalangElem = document.querySelector(".greeting")

var greetings = GreetingTheUSer();
greetingsElem.innerHTML = greetings.greetingCounter();
function GreetingUser(){
    
    // get a reference to the language radi buttons
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn)
    {
        greetings.setLangage(checkedRadioBtn.value);
        if (fname.value !== "")
            greetings.setName(fname.value);
        greetingsElem.innerHTML = greetings.greetingCounter();
        greetinalangElem.innerHTML =  greetings.greetUser();
    }
    else
    {
        alert("Please, enter your prefered language first")
    }
}
greetMeBtn.addEventListener('click',GreetingUser);

function resetCounter(){
    greetings.resetCounter();
    greetingsElem.innerHTML = greetings.greetingCounter();
}
resetCouBtn.addEventListener('click',resetCounter);