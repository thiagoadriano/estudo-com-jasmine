// usa-se a função fail para ter certeza que uma expressão não poderá ser executada se aconteccer os testes param
describe("Realiza o teste em caso de falha com o fail", function() {
    it("Deve falhar os testes em caso de execução", function() {
        var operacao = function(exec, callback) {
            if (exec) {
                callback();
            }
        };
        operacao(false, function() {
            fail("Não deve executar essa função");
        });
    });
});