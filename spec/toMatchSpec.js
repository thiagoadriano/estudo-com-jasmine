//toMatch é outro match de comparação sendo este possível o uso de ReGex
describe("Teste do toMatch", function() {
    it("Deve validar o uso do toMatch", function() {
        var texto = "Teste com Jasmine";
        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-678").toMatch(/^\d{5}-\d{3}$/)
    });
});