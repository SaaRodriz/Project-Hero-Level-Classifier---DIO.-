
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    
    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

// Exemplo de uso com laço de repetição para calcular ranks de múltiplos jogadores
const jogadores = [
    { nome: "Jogador1", vitorias: 5, derrotas: 3 },
    { nome: "Jogador2", vitorias: 15, derrotas: 10 },
    { nome: "Jogador3", vitorias: 35, derrotas: 20 },
    { nome: "Jogador4", vitorias: 65, derrotas: 30 },
    { nome: "Jogador5", vitorias: 85, derrotas: 40 },
    { nome: "Jogador6", vitorias: 95, derrotas: 50 },
    { nome: "Jogador7", vitorias: 120, derrotas: 60 }
];

for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    console.log(`${jogador.nome}: ${calcularRank(jogador.vitorias, jogador.derrotas)}`);
}