describe("Consulta", function(){

    var leonardo;

    beforeEach(function(){
        leonardo = new PacienteBuilder().constroi();
    });

    describe("Consulta do tipo retorno", function(){

            it("Deve ser uma consulta do tipo retorno", function(){
                var consulta = new Consulta("Leonardo", [], true, true);

                expect(consulta.preco()).toEqual(0);
            });
    });

    describe("Consulta com procedimentos", function(){

        it("Deve custar 25 reais os procedimentos comuns", function(){
            var consulta = new Consulta("Leonardo", ["Comum"], false, false);

            expect(consulta.preco()).toEqual(25);
        });

        it("Procedimentos Especiais", function(){
            var consulta = new Consulta("Leonardo", ["raio-x"], false, false);

            expect(consulta.preco()).toEqual(55);
         });
    });

    describe("Procedimentos especiais com consulta particular", function(){
        it("Procedimentos Especiais com consulta Particular", function(){
            var consulta = new Consulta("Leonardo", ["raio-x"], true, false);

            expect(consulta.preco()).toEqual(55 * 2); 
        });
    });


});