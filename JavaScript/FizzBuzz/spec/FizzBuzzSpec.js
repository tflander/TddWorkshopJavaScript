describe("FizzBuzz Tests", function() {

    var fizzbuzz

    beforeEach(function() {
        fizzbuzz = new FizzBuzz()
    });

    it("translates 1", function() {
        expect(fizzbuzz.process(1)).toEqual("1");
    });

});
