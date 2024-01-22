let numSorteados = [];
let limite = 3;
let numAlet;

function numAleatorio(){
    numEscolhido = parseInt(Math.random() * limite + 1);
    if(numSorteados.length==limite){
        numSorteados=[]; 
    }if(numSorteados.includes(numEscolhido)){
        return numAleatorio();
    }else{
        numSorteados.push(numEscolhido);
        console.log(numSorteados);
        return numEscolhido;
    }

}

function reiniciarJogo(){
    numAlet = numAleatorio();
    txtToElement('h1','Hora do desafio');
    txtToElement('p','Escolha um número de 0 a '+limite);
    tentativas = 1;
    limpar('input','')
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
reiniciarJogo();

function txtToElement(tag, txt){
    document.querySelector(tag).innerHTML= txt;
    // Chame a função de fala de maneira assíncrona
    setTimeout(function() {
        responsiveVoice.speak(txt, 'Brazilian Portuguese Female', { rate: 1.2 });
    }, 0);
}

function verificarChute(){
    
    numDigi = parseInt(document.querySelector('input').value);

    if(numDigi == numAlet){
        let vezes = tentativas==1 ? ' tentativa ':' tentativas ';
        let txtCongrat = 'Acerto em '+tentativas + vezes;
        txtToElement('p', txtCongrat);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numDigi > numAlet){
            txtToElement('p', 'o número secreto é menor!')
        }else{      
            txtToElement('p','O número secreto é maior!');
        }
        limpar('input','')
    }
    tentativas ++;
}


function limpar(tag, valor){
    document.querySelector(tag).value = valor;
}


