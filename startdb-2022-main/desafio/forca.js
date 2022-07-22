// |\    /\    /|
// | \  /  \  / |
// |  \/    \/  |
// | PietroKing |
// |____________|

class Forca {

  constructor(palavraSecreta){
    this.palavraSecreta = palavraSecreta;
    this.vidas = 6;
    this.letrasChutadas = [];
    this.palavra = [];
    //esconder palavra
    for(let i=0; i<this.palavraSecreta.length; i++){
      this.palavra[i] = "_"
    }//
  }
  
  chutar(letra) {
    this.verificaLetra(letra);
    this.testeVitoria();
    this.buscarDadosDoJogo(); 
   }

  buscarEstado() { 
    switch (this.estado) {
      case 'ganhou':
        return 'ganhou';
    
      case 'perdeu':
        return 'perdeu';

      default:
        return 'aguardando chute'; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    }
    
  buscarDadosDoJogo() {
    let palavra = this.palavra;
    let letrasChutadas = this.letrasChutadas;
    let vidas = this.vidas;

      return {
          letrasChutadas, // Deve conter todas as letras chutadas
          vidas, // Quantidade de vidas restantes
          palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

  verificaLetra(letra) {
  
    //let alfabeto = ["A","B","C","Ç","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","ç","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    //testa caracter de entrada e coloca no vetor letrasChutadas
    let testeCaracter = alfabeto.find(caracter => caracter == letra)//busca se o caracter digitado é uma das entradas validas
    if ((testeCaracter !== undefined) && (testeCaracter !== this.letrasChutadas.find(caracter => caracter == letra))) {//verifica se a letra ja foi chutada
      this.letrasChutadas.push(letra);//add na lista de letras chutadas a letra
      let acerto = false;
        for(let i=0; i<this.palavraSecreta.length; i++){//percorre a palavra pra ver se existe mais de uma ocorrencia da letra chutada
          if(this.palavraSecreta[i] === testeCaracter){//verifica se a posicao da na palavra correspnde a letra chutada
            this.palavra[i] = testeCaracter;
            acerto = true;
          }
        }if (acerto == false){//Se nao houver nenhuma ocorrencia da latra chutada, diminui uma vida
          this.vidas -= 1;
        }
    }else{
      console.log("Caracter invalido, digite uma letra ainda nao tentada !")
    }//
  }

  testeVitoria(){
    if ((this.palavra.find(caracter => caracter === "_") == null) && (this.vidas > 0)) {
      this.estado = 'ganhou';
    }else if(this.vidas == 0){
      this.estado = 'perdeu';
    }
  }
}

module.exports = Forca;
