function PacienteBuilder(){

    var nome = "Leonardo";
    var idade = 28;
    var peso = 80;
    var altura = 1.75;

    var clazz = {
        constroi: function(){
            return Paciente(nome, idade, peso, altura);
        },
        comIdade: function(valor){
            idade = valor;
            return this;
        },
        comPeso: function(valor){
            peso = valor;
            return this;
        },
        comAltura: function(valor){
            altura = valor;
            return this;
        },
        comNome: function(valor){
            nome = valor;
            return this;
        }
    };

    return clazz;
}