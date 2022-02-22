const jogo = {
    time1: "",
    time2: "",
    gols1: 0,
    gols2: 0,
    resultado: "",
    atualizarPlacar: function (t1, t2) {
        this.gols1 = parseInt(t1);
        this.gols2 = parseInt(t2);
    },
    atualizaResultado: function (){
        if(this.gol1 > this.gols2) {
            this.resultado = this.time;
        } else if (this.gol1 == this.gols2) {
            this.resultado = "Empate"
        } else {
            this.resultado = this.time2;
        }
    }
}