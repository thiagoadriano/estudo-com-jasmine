// O match toThrow testa se a operção irá falhar apresentando erro
describe("Testa o toThrow", function() {
    it("Deve verificar o uso do toThrow", function() {
        function multi() {
            numero * 10;
        }

        function soma(n1, n2) {
            return n1 + n2;
        }

        expect(multi).toThrow();
        expect(soma).not.toThrow();
    });
});