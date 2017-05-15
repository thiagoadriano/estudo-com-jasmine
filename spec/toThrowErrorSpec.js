//Match toThrowError onde verifica e valida o tipo de exceção e a mensagem informada
describe("Teste do toThrowError", function() {
    it("Deve testar o uso do toThrowError", function() {
        function soma(n1, n2) {
            if (n1 <= 0 || n2 <= 0) {
                throw new TypeError("O valor tem que ser maior que 0");
            }
            return n1 + n2;
        }

        expect(function() { soma(0, 0); }).toThrowError();
        expect(function() { soma(0, 0); }).toThrowError("O valor tem que ser maior que 0");
        expect(function() { soma(0, 0); }).toThrowError(/maior que 0/);
        expect(function() { soma(0, 0); }).toThrowError(TypeError);
        expect(function() { soma(0, 0); }).toThrowError(TypeError, "O valor tem que ser maior que 0");
        expect(function() { soma(1, 1); }).not.toThrowError();
    });
})