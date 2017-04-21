// O math toBeTruthy casa quando a variavel tem uma valor. Valores falsos são null, undefined, 0, '', NaN e false
describe("Teste usando o toBeTruthy", function() {
    var n1 = { valor: 10 };
    var n2 = "Teste";
    var n3 = 20;
    it("Deve verificar o uso do toBeTruthy", function() {
        expect(n1).toBeTruthy();
        expect(n2).toBeTruthy();
        expect(n3).toBeTruthy();
    });
});