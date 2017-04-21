//o math toBeGreaterThan compara se o valor passado para teste é maior do que o esperado
describe("Teste do toBeGreaterThan", function() {
    it("Deve verificar o uso do toBeGreaterThan", function() {
        var n1 = 200;
        expect(5000).toBeGreaterThan(Math.PI);
        expect("1000").toBeGreaterThan(n1);
    });
});