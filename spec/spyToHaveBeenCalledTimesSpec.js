// Verifica se o método foi chamado a quantidade de vezes informada
describe("Teste do spy toHaveBeenCalledTimes", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve verificar se o método foi executado duas vezes", function() {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });
})