function GreetingTheUSer() {
    var thenamesGreeted = {};
    var thegreetingsCounter = 0;
    var theuserName = " ";
    var thelanguageType;

    function setName(userName) {
        theuserName = userName;
        if (thenamesGreeted[theuserName] === undefined) {
            thegreetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            thenamesGreeted[userName] = 0;
            //update the DOM to display the counter
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

    function greetingCounter()
    {
        return thegreetingsCounter;
    }

    function greetUser(){

        if(thelanguageType == "english" )
        {
            return "Hello, " + getName(); 
        }
        else if(thelanguageType == "afrikaans"){
            return "Hallo, " + getName(); 
        }
        else if(thelanguageType == "isiXhosa"){
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