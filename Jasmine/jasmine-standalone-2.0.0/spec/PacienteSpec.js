describe("Paciente", function(){

    it("Deve calcular IMC", function(){
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
        
        expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
    });

    it("Deve calcular os batimentos", function(){
        var leonardo = new Paciente("Leonardo", 22, 80, 1.75);

        expect(leonardo.batimentos()).toEqual(22 * 365 * 24 * 60 * 80);
    })
});