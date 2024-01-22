# 🎮Jogo do Número Secreto: Desafio ALURA
Este desafio de jogo de adivinhação de número secreto foi proposto em parceria com a [ALURA](https://cursos.alura.com.br/user/jhonatan-goncalves-pereira) na realização do [PROGRAMA ONE](https://www.oracle.com/br/education/oracle-next-education/) e tem como objetivo proporcionar uma prática intensiva de conceitos fundamentais de JavaScript, especialmente no que diz respeito ao uso de estruturas de controle de fluxo, manipulação da DOM (Document Object Model) e integração com bibliotecas externas.

## 🗒️ Conceitos Praticados:

### 1 - Estruturas de Controle de Fluxo:

- Utilização de estruturas condicionais (if, else) para avaliar e controlar o fluxo do jogo, fornecendo feedbacks ao jogador com base nas interações.

### 2 - Manipulação da DOM:
- Implementação de funções para manipular elementos HTML dinamicamente, como atualizar textos, desabilitar e habilitar botões, e reiniciar o estado da aplicação.
Funções e Reutilização de Código:
- Organização do código por meio da criação de funções para facilitar a legibilidade e promover a reutilização de código em diferentes partes do jogo.

### 3 -  Biblioteca de Voz (ResponsiveVoice):
- A implementação da biblioteca ResponsiveVoice adiciona uma camada interativa ao jogo, permitindo a comunicação auditiva em tempo real. Alguns dos conceitos abordados incluem:

### 4 - Fala Assíncrona:
- Utilização de setTimeout para chamar a função de fala de maneira assíncrona, garantindo que a execução do código não seja bloqueada.

### 5 - Integração de Bibliotecas Externas:
- Incorporação de bibliotecas externas, neste caso, a ResponsiveVoice, para fornecer suporte a texto para fala em português brasileiro.

### 6 - Configurações da Voz:
- Ajuste de parâmetros, como a taxa de fala (rate), para personalizar a experiência auditiva no jogo.

Este desafio não apenas oferece uma oportunidade prática para consolidar conhecimentos em JavaScript, mas também introduz a aplicação prática de bibliotecas externas, proporcionando uma experiência completa de desenvolvimento web.

-----

🎮🖱️Acesse aqui a versão final do Projeto:
- [Jogo do Número Secreto](https://jogo-do-numero-secreto-eight-flame.vercel.app)

-----

## 📥 Versão Simplificada (Com prompt e alert)
- 📂Projeto na [pasta 01](https://github.com/jhonatan-goncalves-pereira/jogo-do-numero-secreto/tree/main/01-Descobri%20o%20número%20-%20Alura)
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

## 📥 Versão com Manipulação da DOM na pasta 02-jogo
- 📂projeto na [pasta 02](https://github.com/jhonatan-goncalves-pereira/jogo-do-numero-secreto/tree/main/02-Jogo%20-%20Alura)
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

## conclusão

Em conclusão, o Desafio Jogo em parceria com a ALURA proporcionou uma imersão prática e desafiadora nos fundamentos do JavaScript, explorando desde estruturas de controle até a manipulação dinâmica da DOM. A integração da biblioteca ResponsiveVoice adicionou uma dimensão interativa ao jogo, destacando a importância da incorporação de tecnologias externas para enriquecer a experiência do usuário.

🚀 Se você deseja explorar o código-fonte e conferir os projetos, não deixe de visitar os repositórios no [GitHub.](https://github.com/jhonatan-goncalves-pereira)

- Projeto Simplificado: [Link do Projeto](https://github.com/jhonatan-goncalves-pereira/jogo-do-numero-secreto/tree/main/01-Descobri%20o%20número%20-%20Alura)
- Projeto com Manipulação da DOM: [Link do Projeto](https://github.com/jhonatan-goncalves-pereira/jogo-do-numero-secreto/tree/main/02-Jogo%20-%20Alura)

 🎙️ Sinta-se à vontade para conectar-se comigo no [LinkedIn](https://www.linkedin.com/in/jhonatan-goncalves-pereira/) e discutir mais sobre desenvolvimento web, JavaScript, e outros temas relacionados. Adoro trocar ideias e experiências com colegas da área!


Agradeço pela jornada e espero que este desafio inspire novas explorações e descobertas em seu caminho de aprendizado e desenvolvimento. Estou ansioso para conectar-me e compartilhar insights valiosos!

Atenciosamente,
Jhonatan Gonçalves Pereira






