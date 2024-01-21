let lim = 10

alert(`Pensei em um número de 0 a ${lim}`)

let numSecret =  Math.round(Math.random()*lim+1);
let tentativas = 0;

while(true){
    n = prompt(`O número é: ${numSecret}`)
    tentativas++; 
    if(n <numSecret){
        n = alert("É maior");
    }else if(n>numSecret){
        alert("É menor");
    }else{
       
        break;
    }
}

palavraSinPlur = tentativas > 1 ? "tentativas": "tentativa"
alert(`Congratulations! em ${tentativas} ${palavraSinPlur}`)
