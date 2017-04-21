//O math toBeNull verifica se a variavel está com valor null
describe("Teste com toBeNull", function() {
    var n1 = null;
    var n2 = undefined;

    it("Deve testar o funcionamento do toBeNull", function() {
        expect(n1).toBeNull();
        expect(n2).not.toBeNull();
    });
});