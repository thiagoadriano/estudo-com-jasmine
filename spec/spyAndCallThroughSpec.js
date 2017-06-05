//Permite executar o metodo que está no spy em sua forma original
describe("Teste do spy And.CallThrough", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },
        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });

    it("Deve verificar se o método será executado no formato original", function() {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 2)).toBeUndefined();
        expect(Calculadora.somar).toHaveBeenCalledTimes(1);
    });
})