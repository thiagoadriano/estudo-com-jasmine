//Testa o uso do beforeAll onde o mesmo vai executar uma função apenas uma vez antes de todos os testes it
describe("Teste do beforeAll", function() {
    var contador;

    beforeAll(function() {
        contador = 10;
    });

    beforeEach(function() {
        contador++;
    });

    it("Deve garantir o valor 11 para o contador", function() {
        expect(contador).toEqual(11);
        pending("Teste pendente");
    });

    it("Deve garantir o valor 12 para o contador", function() {
        expect(contador).toEqual(12);
    });
})