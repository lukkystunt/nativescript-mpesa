var Mpesa = require("nativescript-mpesa").Mpesa;
var mpesa = new Mpesa();

describe("greet function", function() {
    it("exists", function() {
        expect(mpesa.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mpesa.greet()).toEqual("Hello, NS");
    });
});