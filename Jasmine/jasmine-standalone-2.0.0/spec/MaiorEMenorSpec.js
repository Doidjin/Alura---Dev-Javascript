describe("MaiorEMenor", function(){
    it("deve atender numeros em ordem nao sequencial", function(){
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([7,3,9,12]);

        expect(algoritmo.pegaMaior()).toEqual(12);
        expect(algoritmo.pegaMenor(3)).toEqual(3);
    });

    it("deve atender numeros em ordem decrescente", function(){
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([9,8,7,6]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve atender numeros em ordem crescente", function(){
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([6,7,8,9]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve atender uma lista com apenas 1 elemento", function(){
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5]);

        expect(algoritmo.pegaMaior()).toEqual(5);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });
});