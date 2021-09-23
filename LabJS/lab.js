window.onload = function(){
    let ativar = document.getElementById("bt1");
    ativar.addEventListener("click", inverter);
    let ativar2 = document.getElementById("bt2");
    ativar2.addEventListener("click", marcaVogais);
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
    textoString.forEach((letra) => {
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
        resposta.innerHTML = resultado;
}