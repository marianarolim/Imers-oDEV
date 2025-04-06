let jogador=0;
function rodada(){ 
  rodadaAtual =1;
  while(rodadaAtual <=3){
    console.log("Rodada: " + rodadaAtual)
   
  
   escolhajogador = parseInt(prompt("Nivel " + rodadaAtual + ", escolha vidro (1, 2, 3):"))
    pisoQuebrado = Math.floor(Math.random()*3) +1;
    if(escolhajogador == pisoQuebrado){
  alert("caiu");
     return;
    } if(escolhajogador>=4 || isNaN(escolhajogador))  {
      alert("Entrada inválida!!!")
     rodada=1000;
      } 
    else {
      alert("Passou! Piso quebrado estava na ponte: " + pisoQuebrado)
    } 
    rodadaAtual = rodadaAtual + 1
    pontos();  
  }
    
    
    
 ;
  
    if(rodadaAtual == 4) {
      alert("Você ganhou!!")
    }
  
    }
    function pontos(){
      if (jogador >=4){
        return;
      }
      jogador++
      document.getElementById("pontos").innerText="Você chegou até o piso: " + jogador;
      
    }