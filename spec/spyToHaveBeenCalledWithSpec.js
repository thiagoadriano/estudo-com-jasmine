// Verifica se o método foi executado como os mesmos parametros
describe("Teste do spy toHaveBeenCalledWith", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve verificar se o método foi executado com os parametros esperados", function() {
        Calculadora.somar(1, 1);
        Calculadora.somar(1, 2);
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
    });
})