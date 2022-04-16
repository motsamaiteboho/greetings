function GreetingTheUSer() {
    var thenamesGreeted = " ";
    var thegreetingsCounter = 0;
    var theuserName = "";
    var thelanguageType = "";

    if (localStorage['namesGreeted']) {
        thenamesGreeted = localStorage['namesGreeted'];
        thegreetingsCounter = (thenamesGreeted.split(',').length - 1);
    }

    function setName(userName) {
        if (!userName.match(/^[^a-zA]+$/)) {
            theuserName = userName;
            if (!thenamesGreeted.includes(theuserName.toLowerCase())) {
                thegreetingsCounter++;
                //add an entry for the user that was greeted in the Object Map
                thenamesGreeted = thenamesGreeted.concat(theuserName.toLowerCase() + ", ");
                //update the DOM to display the counter
                localStorage.setItem('namesGreeted', thenamesGreeted);
            }
        }
        else {
            alert("enter a valid name")
        }
    }
    function setLangage(language) {
        thelanguageType = language;
    }
    function getName() {
        return theuserName;
    }
    function geLanguage() {
        return thelanguageType;
    }

    function greetingCounter() {
        return thegreetingsCounter;
    }
    function resetCounter() {
        localStorage['namesGreeted'] = "";
        thenamesGreeted = "";
        thegreetingsCounter = 0;
    }
    function greetUser() {

        if (thelanguageType == "english") {
            if (getName() != "")
                return "Hello, " + getName();
            else {
                alert("Please, enter your name first")
                return "..."
            }
        }
        else if (thelanguageType == "afrikaans") {
            if (getName() != "")
                return "Hallo, " + getName();
            else {
                alert("Please, enter your name first")
                return "..."
            }
        }
        else if (thelanguageType == "isiXhosa") {
            if (getName() != "")
                return "Mholweni, " + getName();
            else {
                alert("Please, enter your name first")
                return "..."
            }
        }
    }
    return {
        setName,
        setLangage,
        getName,
        geLanguage,
        greetingCounter,
        greetUser,
        resetCounter
    }
}