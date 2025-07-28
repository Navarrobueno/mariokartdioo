// marioKart.js
const personagens = require('./personagens');

const nomesPista = ["RETA", "CURVA", "CONFRONTO"];
const rodadas = 5;

// Seleciona 2 personagens aleatórios
const nomes = Object.keys(personagens);
const jogador1Nome = nomes[Math.floor(Math.random() * nomes.length)];
let jogador2Nome;
do {
  jogador2Nome = nomes[Math.floor(Math.random() * nomes.length)];
} while (jogador1Nome === jogador2Nome);

const jogador1 = { nome: jogador1Nome, pontos: 0, ...personagens[jogador1Nome] };
const jogador2 = { nome: jogador2Nome, pontos: 0, ...personagens[jogador2Nome] };

console.log(`>>> Corrida entre ${jogador1.nome} e ${jogador2.nome}<<<\n`);

for (let i = 1; i <= rodadas; i++) {
  const bloco = nomesPista[Math.floor(Math.random() * nomesPista.length)];
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  let total1, total2;

  console.log(`--> Rodada ${i} - Bloco: ${bloco} <--`);

  switch (bloco) {
    case "RETA":
      total1 = dado1 + jogador1.velocidade;
      total2 = dado2 + jogador2.velocidade;
      break;
    case "CURVA":
      total1 = dado1 + jogador1.manobrabilidade;
      total2 = dado2 + jogador2.manobrabilidade;
      break;
    case "CONFRONTO":
      total1 = dado1 + jogador1.poder;
      total2 = dado2 + jogador2.poder;
      break;
  }

  console.log(`${jogador1.nome}: dado ${dado1}, total ${total1}`);
  console.log(`${jogador2.nome}: dado ${dado2}, total ${total2}`);

  if (bloco === "CONFRONTO") {
    if (total1 > total2) {
      jogador2.pontos = Math.max(0, jogador2.pontos - 1);
      console.log(`${jogador1.nome} venceu o confronto!`);
    } else if (total2 > total1) {
      jogador1.pontos = Math.max(0, jogador1.pontos - 1);
      console.log(`${jogador2.nome} venceu o confronto!`);
    } else {
      console.log("Empate no confronto!");
    }
  } else {
    if (total1 > total2) {
      jogador1.pontos++;
      console.log(`${jogador1.nome} venceu a rodada!`);
    } else if (total2 > total1) {
      jogador2.pontos++;
      console.log(`${jogador2.nome} venceu a rodada!`);
    } else {
      console.log("Empate na rodada!");
    }
  }

  console.log(`Placar: ${jogador1.nome} ${jogador1.pontos} x ${jogador2.pontos} ${jogador2.nome}\n`);
}

console.log(" Resultado Final:");
if (jogador1.pontos > jogador2.pontos) {
  console.log(`||----|| ${jogador1.nome} venceu com ${jogador1.pontos} pontos! ||----||`);
} else if (jogador2.pontos > jogador1.pontos) {
  console.log(`||----|| ${jogador2.nome} venceu com ${jogador2.pontos} pontos! ||----||`);
} else {
  console.log("Empate!");
}
