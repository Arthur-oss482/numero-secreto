alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute nao for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)
    } else {
        if (chute > numeroSecreto) {
            alert (`o número secreto é menor que ${chute}`);
        } else {
            alert (`o número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}	    