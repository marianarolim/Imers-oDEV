function rps() { 
    idade = prompt("Quantos anos você tem? ");
    if (idade < 18) {
      alert("você não pode jogar");
    
    } else {  
    if (idade >= 18) {
      alert("Seja bem vindo");
    }
    
    escolhajogador = prompt("1-pedra, 2-papel ou 3-tesoura");
    escolhaComputador = Math.floor(Math.random() * 3) + 1;
    
    if (escolhajogador == escolhaComputador) {
      alert("Lemos a mente um do outro? Interessante - Troll-9000");
    }
    if (escolhajogador == 1) {
      if (escolhaComputador == 2) {
        alert("Previsível… Tente algo novo, talvez? - Troll-9000"
             );
      }
      if (escolhaComputador == 3) {
        alert("Eu deixei você ganhar… talvez. - Troll-9000");
      }
    }
    if (escolhajogador == 2) {
      if (escolhaComputador == 1) {
        alert("Isso foi… sorte. Apenas sorte. - Troll-9000");
      }
      if (escolhaComputador == 3) {
        alert("Eu poderia fingir que foi difícil... mas não foi - Troll-9000");
      }
    }
    if (escolhajogador == 3) {
      if (escolhaComputador == 1) {
        alert("HAHA! Mais uma vitória pro mestre! -  Troll-9000");
      }
      if (escolhaComputador == 2) {
        alert("Análise completa: vitória do usuário. Inesperado. Mas… interessante. - Troll-9000 ");
      }
    }
    
    alert("Não que isso vá mudar seu destino, mas eu joguei: " + escolhaComputador);
    }
      }