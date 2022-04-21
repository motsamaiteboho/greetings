// get a reference to the textbox where the name is to be entered
const fname = document.querySelector(".fname");
//get a reference to the greet button
const greetMeBtn = document.querySelector(".greetMeBtn");
const resetCouBtn = document.querySelector(".resetCouBtn");

const greetingsElem = document.querySelector(".count")
const greetinalangElem = document.querySelector(".greeting")

var greetings = GreetingTheUSer();

if (localStorage['namesGreeted']) {
    var thegreetedNames = JSON.parse(localStorage.getItem('namesGreeted'))
    for (var i = 0; i < thegreetedNames.length; i++) {
        greetings.storeNames(thegreetedNames[i]);
    }
    greetingsElem.innerHTML = greetings.greetingCounter();
}

function GreetingUser() {
    greetingsElem.innerHTML = greetings.greetingCounter();
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (fname.value !== "") {
        if (checkedRadioBtn) {
            if (!fname.value.match(/^[^a-zA]+$/))
            {
                greetings.storeNames(fname.value);
                localStorage.setItem('namesGreeted', JSON.stringify(greetings.greetingNames()));
                greetinalangElem.innerHTML = greetings.greetUser(checkedRadioBtn.value);
            }
            fname.value = "";
        }
        else {
           
            greetinalangElem.innerHTML = "Please, select your prefered language";
            setTimeout(function(){
                greetinalangElem.innerHTML  = "...";
              },3000);
        }
    }
    else {
        setTimeout(function(){
            greetinalangElem.innerHTML  = "...";
          },3000);
        greetinalangElem.innerHTML = "Please, enter your name";
        
    }
    // get a reference to the language radi buttons

    greetingsElem.innerHTML = greetings.greetingCounter();
}
greetMeBtn.addEventListener('click', GreetingUser);

function resetCounter() {
    localStorage['namesGreeted'] = "";
    greetings.resetCounter();
    greetingsElem.innerHTML = greetings.greetingCounter();
}
resetCouBtn.addEventListener('click', resetCounter);