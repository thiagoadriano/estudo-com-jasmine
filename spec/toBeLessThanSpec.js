//o math toBeLessThan é usado para verificar se um numero é menor do que o esperado
describe("Teste do toBeLessThan", function() {
    it("Deve varificar o uso do toBeLessThan", function() {
        var n1 = 2;
        expect("1").toBeLessThan(n1);
        expect(3).toBeLessThan(Math.PI);
        expect(5000).not.toBeLessThan(Math.E);
    });
});