//Uso do expect que sendo este o comparador de teste junto com os matchers que no caso a seguir usa o toBe
describe("Expect", function() {
    it("Deve garantir que 1+1 é 2", function() {
        expect(1 + 1).toBe(2);
    });
});