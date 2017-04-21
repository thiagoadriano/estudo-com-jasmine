//O toContain é usado na busca em texto ou em um array

describe('Teste do toContain', function() {
    it("Deve verificar o uso do toContain", function() {
        var array = ["Carro", "Moto", "Bike"];
        var texto = "Informações extras";

        expect(array).toContain("Moto");
        expect(texto).toContain("extras");
        expect(texto).not.toContain("Carro");
    });
});