function GreetingTheUSer() {
    var thenamesGreeted = "";
    var thegreetingsCounter = 0;
    var theuserName = "";
    var thelanguageType = "";
    function IncrementCounter(userName){
         theuserName = userName;
         if (!thenamesGreeted.includes(theuserName.toLowerCase())) {
                thegreetingsCounter++;
                //add an entry for the user that was greeted in the Object Map
                thenamesGreeted = thenamesGreeted.concat(theuserName.toLowerCase() + ", ");
        }
    }
    function greetingNames(){
        return thenamesGreeted;
    }
    function greetingCounter() {
        return thegreetingsCounter;
    }
    function resetCounter() {
        thenamesGreeted = "";
        thegreetingsCounter = 0;
    }
    function greetUser(language) {
        thelanguageType = language;
        if (thelanguageType == "english") {
            if (theuserName != "")
                return "Hello, " + theuserName;
            else {
           
                return "Please, enter your name";
            }
        }
        else if (thelanguageType == "afrikaans") {
            if (theuserName != "")
                return "Hallo, " +theuserName;
            else {
            
                return "Please, enter your name"
            }
        }
        else if (thelanguageType == "isiXhosa") {
            if (theuserName != "")
                return "Mholweni, " + theuserName;
            else {
                
                return "Please, enter your name"
            }
        }
    }
    return {
        IncrementCounter,
        greetingCounter,
        greetUser,
        resetCounter,
        greetingNames
    }
}