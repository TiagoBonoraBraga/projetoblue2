const prompt = require('prompt-sync')();

console.log('...VAMOS JOGAR JOKEMPÔ...');
console.log('...APERTE O ENTER PARA COMEÇAR...')
prompt();

let jokenpo = ['pedra','papel','tesoura'];// array com opções

//volta do jogo
let continuar;
do {

//rodadas
let rodadas = +prompt('Quantas rodadas desejar jogar? ');
while(typeof rodadas !== 'number' || isNaN(rodadas)){
    console.log('Digite somente número.');
    console.log();
    rodadas = +prompt('Quantas rodadas desejar jogar? ');
}
//variáveis
//contagem dos pontos
let pontosUsuario = 0;
let pontosComputador = 0;

// repetição das rodadas
for(let i=0; i<rodadas;i++){

//escolha do usuario
console.log();
console.log('Digite seu palpite: pedra, papel ou tesoura');
console.log();
let respostaUsuario = prompt('Digite seu palpite: ');
while(respostaUsuario !== 'pedra' && respostaUsuario !== 'papel' && respostaUsuario !== 'tesoura'){//validação
    console.log('ERRO - Digite: pedra, papel ou tesoura');
    console.log();
    respostaUsuario = prompt('Digite seu palpite: ');
}
console.log();
//escolha do computador
let respostaComputador = jokenpo[Math.floor(Math.random() * jokenpo.length)]; //sorteio

console.log(`Sua escolha foi: ${respostaUsuario}`);
console.log(`A escolha do Computador foi: ${respostaComputador}`);
console.log();

//codições
if((respostaUsuario == 'pedra' && respostaComputador == 'papel') || (respostaUsuario == 'papel'  && respostaComputador == 'tesoura' ) || (respostaUsuario == 'tesoura'  && respostaComputador == 'pedra' )){
    console.log('Computador venceu esta rodada...');
    pontosComputador++;
   
} else if((respostaUsuario == 'pedra' && respostaComputador == 'tesoura') || (respostaUsuario == 'tesoura'  && respostaComputador == 'papel' ) || (respostaUsuario == 'papel'  && respostaComputador == 'pedra' )){
    console.log('Você venceu essa rodada...');
    pontosUsuario++;
    
} else if((respostaUsuario == 'pedra' && respostaComputador == 'pedra') || (respostaUsuario == 'papel' && respostaComputador == 'papel') || (respostaUsuario == 'tesoura' && respostaComputador == 'tesoura')){
    console.log('Rodada empatada, ninguem pontua...');
}   
}
console.log();
//resultado

if(pontosUsuario > pontosComputador){
    console.log(`Você venceu ganhando ${pontosUsuario} ponto(s) em ${rodadas} rodada(s). PARABÉNS....`);
    
    
}else if(pontosComputador > pontosUsuario){
    console.log(`Computador venceu ganhando ${pontosComputador} ponto(s) em ${rodadas} rodada(s).`);
    
    
}else{
    console.log(`Jogo empatado, com usuario fazendo ${pontosUsuario} ponto(s) e o computador fazendo ${pontosComputador} ponto(s)`);
    
}
//jogar de novo
continuar = prompt('Deseja continuar? Digite s para sim e n para não.');
}while(continuar == "s" ){
 console.log(' --- FIM --- ');
}
   


