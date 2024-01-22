# Jogo de Adivinhação: Desafio ALURA
## Versão Simplificada (Com prompt e alert)
javascript
```
let limite = 10;

alert(`Pensei em um número de 0 a ${limite}`);

let numSecret = Math.round(Math.random() * limite + 1);
let tentativas = 0;

while (true) {
    n = prompt(`O número é: ${numSecret}`);
    tentativas++; 
    if (n < numSecret) {
        alert("É maior");
    } else if (n > numSecret) {
        alert("É menor");
    } else {
        break;
    }
}

const palavraSinPlur = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Congratulations! em ${tentativas} ${palavraSinPlur}`);
Nesta versão simplificada, o jogo é baseado em interações por meio de prompt e alert. O jogador tenta adivinhar o número secreto, recebendo feedbacks sobre se o número é maior ou menor até acertar.
```

## Versão com Manipulação da DOM na pasta 02-jogo
javascript
```
let numSorteados = [];
let limite = 3;
let numAlet;

function numAleatorio() {
    numEscolhido = parseInt(Math.random() * limite + 1);
    if (numSorteados.length == limite) {
        numSorteados = [];
    }
    if (numSorteados.includes(numEscolhido)) {
        return numAleatorio();
    } else {
        numSorteados.push(numEscolhido);
        console.log(numSorteados);
        return numEscolhido;
    }
}

function reiniciarJogo() {
    numAlet = numAleatorio();
    txtToElement('h1', 'Hora do desafio');
    txtToElement('p', 'Escolha um número de 0 a ' + limite);
    tentativas = 1;
    limpar('input', '');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
reiniciarJogo();

function txtToElement(tag, txt) {
    document.querySelector(tag).innerHTML = txt;
    // Chame a função de fala de maneira assíncrona
    setTimeout(function() {
        responsiveVoice.speak(txt, 'Brazilian Portuguese Female', { rate: 1.2 });
    }, 0);
}

function verificarChute() {
    numDigi = parseInt(document.querySelector('input').value);

    if (numDigi == numAlet) {
        let vezes = tentativas == 1 ? ' tentativa ' : ' tentativas ';
        let txtCongrat = 'Acerto em ' + tentativas + vezes;
        txtToElement('p', txtCongrat);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numDigi > numAlet) {
            txtToElement('p', 'o número secreto é menor!')
        } else {      
            txtToElement('p', 'O número secreto é maior!');
        }
        limpar('input', '')
    }
    tentativas++;
}

function limpar(tag, valor) {
    document.querySelector(tag).value = valor;
}
```
Nesta versão, o jogo é construído com manipulação da DOM. Os jogadores interagem com a página da web para inserir palpites e receber feedbacks sobre se o número é maior ou menor. O jogo suporta reinicialização e utiliza a biblioteca ResponsiveVoice para fornecer suporte a texto para fala em tempo real.





