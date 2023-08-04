window.onload = function(){
    let ativar = document.getElementById("bt1");
    ativar.addEventListener("click", inverter);
    let ativar2 = document.getElementById("bt2");
    ativar2.addEventListener("click", marcaVogais);
    let ativar3 = document.getElementById("bt3");
    ativar3.addEventListener("click", numeroFrequencia);
    let ativar4 = document.getElementById("bt4");
    ativar4.addEventListener("click", maiorFrequencia);
    let ativar5 = document.getElementById("bt5");
    ativar5.addEventListener("click", procuraSubstitui);
    let ativar6 = document.getElementById("bt6");
    ativar6.addEventListener("click", diasVida);
    let ativar7 = document.getElementById("bt7");
    ativar7.addEventListener("click", dataExtenso);
    let ativar8 = document.getElementById("bt8");
    ativar8.addEventListener("click", distanciaDatasPorSemana);
    let ativar9 = document.getElementById("bt9");
    ativar9.addEventListener("click", qualidadeSenha);
    let ativar10 = document.getElementById("bt10");
    ativar10.addEventListener("click", codificaFrases);
}
function inverter(){
    let texto = document.getElementById("entradaQ1").value;
    let textoString = texto.split("");
    let resultado;
    let resposta = document.getElementsByTagName("p")[0];
    let textoInvertido = [];
    textoString.forEach((letra) =>{
        textoInvertido.unshift(letra)
    })
    resultado = textoInvertido.join("");
    resposta.innerHTML = resultado;
}
function marcaVogais(){
    let texto = document.getElementById("entradaQ2").value;
    let textoString = texto.split("");
    let resultado;
    let resposta = document.getElementsByTagName("p")[1];
    let textoAlterado = "";
    textoString.forEach((letra) =>{​​​
        if("AEIOUaeiou".indexOf(letra) !==-1) {​​​
            textoAlterado += letra.bold();
        }​​​ else {​​​
        textoAlterado += letra;
    }​​​
    resultado = textoAlterado.join("");
    resposta.innerHTML = resultado;
}​​​)
    /*textoString.forEach((letra) => {
        switch(letra){
            case A:
                letra.bold();
                break;
            case a:
                letra.bold();
                break;
            case E:
                letra.bold();
                break;
            case e:
                letra.bold();
                break;
            case I:
                letra.bold();
                break;
            case i:
                letra.bold();
                break;
            case O:
                letra.bold();
                break;
            case o:
                letra.bold();
                break;
            case U:
                letra.bold();
                break;
            case u:
                letra.bold();
                break;
        }
    })
    resultado = textoString.join("");
        resposta.innerHTML = resultado;*/

function numeroFrequencia(){
    let texto = document.getElementById("entradaQ3").value;
    let array = texto.split(" ");
    

}
function maiorFrequencia(){

}
function procuraSubstitui(){
    let texto = document.getElementById("entradaQ5").value;
    let array = texto.split(" ");
    let procura = document.getElementById("entradaQ5-1").value;
    let substitui = document.getElementById("entradaQ5-2").value;

}
function diasVida(){

}
function dataExtenso(){

}
function distanciaDatasPorSemana(){

}
function qualidadeSenha(){

}
function codificaFrases(){

}
}