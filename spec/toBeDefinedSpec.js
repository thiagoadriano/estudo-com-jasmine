//toBeDefined é outro match com o proposito de verificar se a variavel foi setado valor. No caso verifica se a mesma não está como undefined
describe("Teste to toBeDefined", function() {
    it("Deve verificar o uso do toBeDefined", function() {
        var n1 = 10;
        var n2;
        var n3 = undefined;
        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();
    });
});