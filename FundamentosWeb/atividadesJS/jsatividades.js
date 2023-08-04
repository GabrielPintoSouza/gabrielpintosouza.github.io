window.onload = function(){
    let acionar = document.getElementById("executar1");
    acionar.addEventListener("click", fatorial);
    let acionar2 = document.getElementById("executar2");
    acionar2.addEventListener("click", potencia4);
    let acionar3 = document.getElementById("executar3");
    acionar3.addEventListener("click", somaPar);
    let acionar4 = document.getElementById("executar4");
    acionar4.addEventListener("click", fibonacci);
    let acionar5 = document.getElementById("executar5");
    acionar5.addEventListener("click", numerosPrimos);
}
function fatorial(){
    let  entrada = document.getElementById("entrada").value;
    let  resposta = document.getElementsByTagName("p")[1];
    let resultado = entrada;
    let guard;
    let dec = entrada - 1;
    if(entrada>=0)
    {
        if(entrada==0)
        resultado=1;
        else
        {
            for(let i = dec; i>1; i--)
            resultado*= i;
        }
    }
    else resultado = "inválido."
    resposta.innerHTML = resultado;
}
function potencia4(){
    const base = 4;
    let resposta = document.getElementsByTagName("p")[3];
    resultado = base;
    console.log(resultado)
    resposta.innerHTML = resultado;
    document.write("1° potência de 4: "+ resultado)
    for(i=2; i<=30; i++){
        resultado *=base;
        console.log(resultado);
        resposta.innerHTML = resultado;
        document.write("<br>" +i,"° potência de 4:"+ resultado);
    }
}
function somaPar(){
    let resultado = 0;
    let resposta = document.getElementsByTagName("p")[5];
    for(num=2; num<=1000; num++){
        if(num%2==0)
        resultado +=num;
    }
    resposta.innerHTML = resultado;
}
function fibonacci(){
    let ultimo = 2;
    let penultimo =1;
    let numero;
    document.write("1°: 1");
    document.write("<br> 2°: 2");
    for(i=3; i<=100; i++){
        numero = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = numero;
        document.write("<br>"+i+"° : "+numero)
    }
}
function numerosPrimos(){
    let div;
    for(i=2; i<=1000; i++){
        div = 0;
        for(aux = 1; aux<=i; aux++){
            if(i%aux == 0)
            div++;
        }
        if(div == 2)
        document.write(i+"<br>");
    }
}