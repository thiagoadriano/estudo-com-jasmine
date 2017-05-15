// O beforeEach executa uma ação antes de qualquer execução de teste com o it
describe("Teste do beforeEach", function() {
    var contador = 0;
    beforeEach(function() {
        contador++;
    });
    it("Deve incrementar o contador em 1", function() {
        expect(contador).toEqual(1);
    });
    it("Deve incrementar o contador em 2", function() {
        expect(contador).toEqual(2);
    });
});