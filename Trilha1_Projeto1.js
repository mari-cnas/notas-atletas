//Projeto de certificação 1 - Pontuação dos atletas
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];

class Avaliacao {
  constructor(atletas) {
    this.atletas = atletas;
  }

  calcularMedia() {
    this.atletas.forEach(function (atleta) {
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b); // Usar slice() para não modificar o array original
      let notasComputadas = notasOrdenadas.slice(1, 4); // Desconsiderar a maior e a menor nota
      let soma = notasComputadas.reduce((acc, nota) => acc + nota, 0);
      let media = soma / notasComputadas.length;
      atleta.media = media;
    });
  }

  exibirConsole() {
    this.atletas.forEach(function (atleta) {
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas: ${atleta.notas.join(", ")}`);
      console.log(`Média: ${atleta.media}`);
      console.log("\n")
    });
  }
}

// Criar uma instância da classe e executar os métodos
const avaliacao = new Avaliacao(atletas);
avaliacao.calcularMedia();
avaliacao.exibirConsole();