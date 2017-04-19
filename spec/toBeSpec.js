//toBe é um dos matchers de comparação - compara além do valor o tipo do objeto também
describe("Comparador toBe", function() {
    it("Deve validar o uso do toBe", function() {
        var obj1 = { valor: true };
        var obj2 = { valor: true };

        expect(true).toBe(true);
        expect("Teste").toBe("Teste");
        expect(true).toBe(obj1 instanceof Object);
        expect(obj1).not.toBe(obj2);

    });

});