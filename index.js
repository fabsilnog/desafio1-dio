const readline = require('readline');

function classificaOutroHeroi() {
  const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leitor.question('Nome do herói: ', (nome) => {
    leitor.question('Quantidade de experiência do herói: ', (xp) => {
      xp = parseInt(xp);

      let nivel;
      if (xp < 1000) {
        nivel = "Ferro";
      } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
      } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
      } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro";
      } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
      } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
      } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
      } else {
        nivel = "Radiante";
      }

      console.log(`O Herói ${nome} está no nível ${nivel}`);

      leitor.question('Deseja inserir outro herói? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {

          leitor.close();
          classificaOutroHeroi();
        } else {

          leitor.close();
        }
      });
    });
  });
}


classificaOutroHeroi();
