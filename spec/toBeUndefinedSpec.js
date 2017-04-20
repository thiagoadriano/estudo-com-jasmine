//toBeUndefined verifica se a variavel é undefined
describe("Teste do toBeUndefined", function() {
    var n1 = 10;
    var n2;
    var n3 = undefined;

    it("Deve verifica o funcionamento do toBeUndefined", function() {
        expect(n2).toBeUndefined();
        expect(n1).not.toBeUndefined();

    });
});