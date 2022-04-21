function GreetingTheUSer() {
    var thenamesGreeted = [];
    var thegreetingsCounter = 0;
    var theuserName = "";
    var thelanguageType = "";
    function storeNames(userName){
         theuserName = userName;
         if (!thenamesGreeted.includes(theuserName.toLowerCase()))
         {
            //add an entry for the user that was greeted in the Object Map
            thenamesGreeted.push(theuserName.toLowerCase());
            thegreetingsCounter++;
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
        }
        else if (thelanguageType == "afrikaans") {
            if (theuserName != "")
                return "Hallo, " +theuserName;
        }
        else if (thelanguageType == "isiXhosa") {
            if (theuserName != "")
                return "Mholweni, " + theuserName;
        }
    }
    return {
        storeNames,
        greetingCounter,
        greetUser,
        resetCounter,
        greetingNames
    }
}