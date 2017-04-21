// O math toBeFalsy casa quando a variavel não tem uma valor. os casos de sucesso são: null, undefined, 0, '', NaN e false
describe("Teste do toBeFalsy", function() {
    it("Deve verificar o uso de toBeFalsy", function() {
        var n1 = false;
        var n2 = null;
        var n3 = "";

        expect(n1).toBeFalsy();
        expect(n2).toBeFalsy();
        expect(n3).toBeFalsy();
    });
});