
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido"; 
        }
        return `o ${this.tipo} atacou usando ${ataque}`;
    }
}

const herois = [
    { nome: "Harry", idade: 12, tipo: "mago" },
    { nome: "Luke", idade: 17, tipo: "guerreiro" },
    { nome: "Bruce", idade: 36, tipo: "monge" },
    { nome: "Naruto", idade: 22, tipo: "ninja" },
    { nome: "Legolas", idade: 30, tipo: "arqueiro" }
]

for (let i = 0; i < herois.length; i++) {
    const heroiData = herois[i];
    const heroi = new Heroi(heroiData.nome, heroiData.idade, heroiData.tipo);
    console.log(heroi.atacar());
}