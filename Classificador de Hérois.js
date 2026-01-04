
function classificarHeroi(nome, xp) {
    let nivel;
    
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }
    
    return `O Héroi de nome **${nome}** está no nível de **${nivel}**`;
}

const herois = [
    { nome: "Percy", xp: 1500 },
    { nome: "Legolas", xp: 2500 },
    { nome: "Nico", xp: 950 },
    { nome: "Frodo", xp: 12000 },
    { nome: "Gandalf", xp: 6500 },
    { nome: "Bill", xp: 7500 }
];

for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    console.log(classificarHeroi(heroi.nome, heroi.xp));
}