// get a reference to the textbox where the name is to be entered
const fname = document.querySelector(".fname");
//get a reference to the greet button
const greetMeBtn = document.querySelector(".greetMeBtn");

const greetingsElem = document.querySelector(".count")
const greetinalangElem = document.querySelector(".greeting")

var greetings = GreetingTheUSer();
function GreetingUser(){
    if (fname.value !== "")
        greetings.setName(fname.value);
    greetingsElem.innerHTML = greetings.greetingCounter();
    // get a reference to the language radi buttons
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn)
    {
        greetings.setLangage(checkedRadioBtn.value);
        greetinalangElem.innerHTML =  greetings.greetUser();
    }
}
greetMeBtn.addEventListener('click',GreetingUser);