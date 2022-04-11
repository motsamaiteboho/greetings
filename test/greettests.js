describe("The bill with settings factory function", function(){
    it("should be able to set the name cost", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal("Thabo",greeting.getName());

        greeting.setName("Teboho");
        assert.equal("Teboho",greeting.getName());
    });

    it("should be able to set the name ", function(){
        let greeting = GreetingTheUSer();

        greeting.geLanguage("english");
        assert.equal("english",greeting.geLanguage());

        greeting.geLanguage("afrikaans");
        assert.equal("afrikaans",greeting.geLanguage());

        greeting.geLanguage("isiXhosa");
        assert.equal("isiXhosa",greeting.geLanguage());
    });
   
});

describe("use values", function(){
    it("should be able to use the name", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });
    it("should be able to greet a person and counter should be 1", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("should be able to greet the same person 3 times and counter should remain 1", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Thabo");
        greeting.setName("Thabo");
        assert.equal(1, greeting.greetingCounter());
    });

    it("should be able to greet 3 diferent people and conter should be 3 ", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Lerato");
        assert.equal(3, greeting.greetingCounter());

    });

    it("should be able to greet 2 different people 4 times and counter should be 2", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Thabo");
        greeting.setName("Teboho");
        greeting.setName("Thabo");
        greeting.setName("Teboho");
        assert.equal(2, greeting.greetingCounter());

    });
    it("should be able to remain 0 if no name is enterd", function(){
        let greeting = GreetingTheUSer();
        assert.equal(0, greeting.greetingCounter());

    });
});
describe("Displaying greeting message", function(){
    it("it should display greeting message according to selected language", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Thabo");
        greeting.setLangage("english")
        assert.equal("Hello, Thabo", greeting.greetUser());
        greeting.setName("Thabo");
        greeting.setLangage("afrikaans")
        assert.equal("Hallo, Thabo", greeting.greetUser());
        greeting.setName("Thabo");
        greeting.setLangage("isiXhosa")
        assert.equal( "Mholweni, Thabo", greeting.greetUser());
       
        assert.equal(2, greeting.greetingCounter());
    })
    it("it should display greeting message for Teboho in English", function(){
        let greeting = GreetingTheUSer();

        greeting.setName("Teboho");
        greeting.setLangage("english")
        assert.equal("Hello, Teboho", greeting.greetUser());

    })

    it("it should display greeting message for John in Afrikaans", function(){
        let greeting = GreetingTheUSer();
        greeting.setName("John");
        greeting.setLangage("afrikaans")
        assert.equal("Hallo, John", greeting.greetUser());

    })

    it("it should display greeting message for Xoli in isiXhosa", function(){
        let greeting = GreetingTheUSer();
        greeting.setName("Xoli");
        greeting.setLangage("isiXhosa")
        assert.equal("Mholweni, Xoli", greeting.greetUser());

    })
});