// Verifica se o método foi executado pelo menos uma vez
describe("Teste do spy toHaveBeenCalled", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve verificar se o método foi executado uma vez", function() {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });
})