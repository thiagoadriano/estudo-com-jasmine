// Criar um objeto no jasmine fazendo uma copia de um objeto passado como parametro assim vigia qualquer execução desse objeto
describe("Teste do spy", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve verificar que o retorno é indefinido", function() {
        expect(Calculadora.somar(1, 1)).toBeUndefined();
    });
})