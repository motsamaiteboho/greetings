function GreetingTheUSer() {
    var thenamesGreeted = " ";
    var thegreetingsCounter = 0;
    var theuserName = " ";
    var thelanguageType;
    //localStorage['greeted'] = 0;
    //localStorage['namesGreeted'] = "";
    if (localStorage['namesGreeted']) {
        thenamesGreeted = localStorage['namesGreeted'];
    }
    if (localStorage['greeted']) {
        thegreetingsCounter = Number(localStorage['greeted']);
    }
    function setName(userName) {
        theuserName = userName;
        if (!thenamesGreeted.includes(theuserName)) {
            thegreetingsCounter++;
            localStorage['greeted'] = thegreetingsCounter;
            //add an entry for the user that was greeted in the Object Map
            thenamesGreeted = thenamesGreeted.concat(theuserName + ", ");
            //update the DOM to display the counter
            localStorage.setItem('namesGreeted', thenamesGreeted);
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

    function greetUser() {

        if (thelanguageType == "english") {
            return "Hello, " + getName();
        }
        else if (thelanguageType == "afrikaans") {
            return "Hallo, " + getName();
        }
        else if (thelanguageType == "isiXhosa") {
            return "Mholweni, " + getName();
        }
    }
    return {
        setName,
        setLangage,
        getName,
        geLanguage,
        greetingCounter,
        greetUser
    }
}