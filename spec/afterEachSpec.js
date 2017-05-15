// Uso do afterEach sendo este uma função sempre executada após cada teste it
xdescribe("Teste do afterEach", function() {
    var contador = 0;

    beforeEach(function() {
        contador++;
    });

    afterEach(function() {
        contador = 0;
    });

    it("Deve garantir o valor o contador em 1", function() {
        expect(contador).toEqual(1);
    });

    it("Deve continuar a garantir que o contador esta em 1", function() {
        expect(contador).toEqual(1);
    });
});