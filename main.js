const mostrarEscolhaDoComputador = document.getElementById(
    "escolhaDoComputador"
  );
  const mostrarEscolhaDoUsuario = document.getElementById("escolhaDoUsuario");
  const mostrarResultadoDoJogo = document.getElementById("resultadoDoJogo");
  const possiveisEscolhas = document.querySelectorAll("button");
  let escolhaDoUsuario;
  let escolhaDoComputador;
  let resultado;
  
  possiveisEscolhas.forEach((escolha) =>
    escolha.addEventListener("click", (event) => {
      escolhaDoUsuario = event.target.id;
      mostrarEscolhaDoUsuario.innerHTML = escolhaDoUsuario;
      gerarEscolhaDoComputador();
      gerarResultado();
    })
  );
  
  function gerarEscolhaDoComputador() {
    const randomNumber = Math.floor(Math.random() * possiveisEscolhas.length);
  
    if (randomNumber === 0) {
      escolhaDoComputador = "Pedra";
    }
    if (randomNumber === 1) {
      escolhaDoComputador = "Papel";
    }
    if (randomNumber === 2) {
      escolhaDoComputador = "Tesoura";
    }
    mostrarEscolhaDoComputador.innerHTML = escolhaDoComputador;
  }
  
  function gerarResultado() {
    if (escolhaDoComputador === escolhaDoUsuario) {
      resultado = "Empate!";
      document.getElementById('resultadoDoJogo').style.color='white';
    } else if (
      (escolhaDoComputador === "Pedra" && escolhaDoUsuario === "Papel") ||
      (escolhaDoComputador === "Papel" && escolhaDoUsuario === "Tesoura") ||
      (escolhaDoComputador === "Tesoura" && escolhaDoUsuario === "Pedra")
    ) {
      resultado = "Você ganhou!";
      document.getElementById('resultadoDoJogo').style.color='green';
    } else {
      resultado = "Você perdeu!";
      document.getElementById('resultadoDoJogo').style.color='red';
    }
  
    mostrarResultadoDoJogo.innerHTML = resultado;
  }