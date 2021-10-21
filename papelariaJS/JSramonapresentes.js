window.onload = function(){
    //outros butons
    let btdesconto = document.getElementById("cupom");
    btdesconto.addEventListener("click", desconto);
    let btadCarrinho = document.getElementById("adCarrinho");
    btadCarrinho.addEventListener("click", adCarrinho);
    let btrmCarrinho = document.getElementById("rmCarrinho");
    btrmCarrinho.addEventListener("click", rmCarrinho);
    let btComprar = document.getElementById("finalizarCompras");
    btComprar.addEventListener("click", fnCompras);
    //Configuração butons 1-12
    let ativar1 = document.getElementById("bt1");
    ativar1.addEventListener("click", brinquedoBola1);
    let ativar2 = document.getElementById("bt2");
    ativar2.addEventListener("click", brinquedoBola2);
    let ativar3 = document.getElementById("bt3");
    ativar3.addEventListener("click", brinquedoBola3);
    let ativar4 = document.getElementById("bt4");
    ativar4.addEventListener("click", brinquedoCarrinho1);
    let ativar5 = document.getElementById("bt5");
    ativar5.addEventListener("click", brinquedoCarrinho2);
    let ativar6 = document.getElementById("bt6");
    ativar6.addEventListener("click", brinquedoCarrinho3);
    let ativar7 = document.getElementById("bt7");
    ativar7.addEventListener("click", brinquedoMassinha1);
    let ativar8 = document.getElementById("bt8");
    ativar8.addEventListener("click", brinquedoMassinha2);
    let ativar9 = document.getElementById("bt9");
    ativar9.addEventListener("click", brinquedoMassinha3);
    let ativar10 = document.getElementById("bt10");
    ativar10.addEventListener("click", brinquedoBoneco1);
    let ativar11 = document.getElementById("bt11");
    ativar11.addEventListener("click", brinquedoBoneco2);
    let ativar12 = document.getElementById("bt12");
    ativar12.addEventListener("click", brinquedoBoneco3);
}

    /*//Configuração butons 13-24

    let ativar13 = document.getElementById("bt13");
    ativar13.addEventListener("click", papelariaCartolina1);
    let ativar14 = document.getElementById("bt14");
    ativar14.addEventListener("click", papelariaCartolina2);
    let ativar15 = document.getElementById("bt15");
    ativar15.addEventListener("click", papelariaCartolina3);
    let ativar16 = document.getElementById("bt16");
    ativar16.addEventListener("click", papelariaCaneta1);
    let ativar17 = document.getElementById("bt17");
    ativar17.addEventListener("click", papelariaCaneta2);
    let ativar18 = document.getElementById("bt18");
    ativar18.addEventListener("click", papelariaCaneta3);
    let ativar19 = document.getElementById("bt19");
    ativar19.addEventListener("click", papelariaCardeneta1);
    let ativar20 = document.getElementById("bt20");
    ativar20.addEventListener("click", papelariaCardeneta2);
    let ativar21 = document.getElementById("bt21");
    ativar21.addEventListener("click", papelariaCardeneta3);
    let ativar22 = document.getElementById("bt22");
    ativar22.addEventListener("click", papelariaPasta1);
    let ativar23 = document.getElementById("bt23");
    ativar23.addEventListener("click", papelariaPasta2);
    let ativar24 = document.getElementById("bt24");
    ativar24.addEventListener("click", papelariaPasta3);

    //Configuração butons 25-36
    let ativar25 = document.getElementById("bt25");
    ativar25.addEventListener("click", eletronicoCarregador1);
    let ativar26 = document.getElementById("bt26");
    ativar26.addEventListener("click", eletronicoCarregador2);
    let ativar27 = document.getElementById("bt27");
    ativar27.addEventListener("click", eletronicoCarregador3);
    let ativar28 = document.getElementById("bt28");
    ativar28.addEventListener("click", eletronicoFoneOuvido1);
    let ativar29 = document.getElementById("bt29");
    ativar29.addEventListener("click", eletronicoFoneOuvido2);
    let ativar30 = document.getElementById("bt30");
    ativar30.addEventListener("click", eletronicoFoneOuvido3);
    let ativar31 = document.getElementById("bt31");
    ativar31.addEventListener("click", eletronicoCaboUsb1);
    let ativar32 = document.getElementById("bt32");
    ativar32.addEventListener("click", eletronicoCaboUsb2);
    let ativar33 = document.getElementById("bt33");
    ativar33.addEventListener("click", eletronicoCaboUsb3);
    let ativar34 = document.getElementById("bt34");
    ativar34.addEventListener("click", eletronicoCaboP21);
    let ativar35 = document.getElementById("bt35");
    ativar35.addEventListener("click", eletronicoCaboP22);
    let ativar36 = document.getElementById("bt36");
    ativar36.addEventListener("click", eletronicoCaboP23);
    //Configuração butons 37-48
    let ativar37 = document.getElementById("bt37");
    ativar37.addEventListener("click", diversoTouca1);
    let ativar38 = document.getElementById("bt38");
    ativar38.addEventListener("click", diversoTouca2);
    let ativar39 = document.getElementById("bt39");
    ativar39.addEventListener("click", diversoTouca3);
    let ativar40 = document.getElementById("bt40");
    ativar40.addEventListener("click", diversoLuva1);
    let ativar41 = document.getElementById("bt41");
    ativar41.addEventListener("click", diversoLuva2);
    let ativar42 = document.getElementById("bt42");
    ativar42.addEventListener("click", diversoLuva3);
    let ativar43 = document.getElementById("bt43");
    ativar43.addEventListener("click", diversoBone1);
    let ativar44 = document.getElementById("bt44");
    ativar44.addEventListener("click", diversoBone2);
    let ativar45 = document.getElementById("bt45");
    ativar45.addEventListener("click", diversoBone3);
    let ativar46 = document.getElementById("bt46");
    ativar46.addEventListener("click", diversoCarteira1);
    let ativar47 = document.getElementById("bt47");
    ativar47.addEventListener("click", diversoCarteira2);
    let ativar48 = document.getElementById("bt48");
    ativar48.addEventListener("click", diversoCarteira3);
*/
//Variáveis Globais
var valorProduto = 0.0;
var valorCarrinho = 0.0;
//Método Desconto (agrupar com o botão desconto e o cdcupom)
function desconto(){
    let aux;
    let cdgDesconto = document.getElementById("cdcupom").value;
    let verificar = "fundamentosweb";
    if(cdgDesconto == verificar)
        aux = valorProduto*0.9;
    else aux=valorProduto;
    let enviarValor = document.getElementsByTagName("p")[1];
    enviarValor.innerHTML = ("Valor do produto: "+aux);
    return aux;
    
}

//Métodos ad, rm e fn carrinho
function adCarrinho(){
    let enviarValor = document.getElementsByTagName("p")[2];
    valorCarrinho += desconto();
    enviarValor.innerHTML = ("Valor Total: " + valorCarrinho);
}
function rmCarrinho(){
    let enviarValor = document.getElementsByTagName("p")[2];
    valorCarrinho -= desconto();
    enviarValor.innerHTML = ("Valor Total: " + valorCarrinho);
}
function fnCompras(){
    let enviarAgradecimento = document.getElementsByTagName("p")[3];
    if(valorCarrinho>0)
        enviarAgradecimento.innerHTML = ("Obrigado pela preferência!! Compra efetuada com sucesso no valor de "+ valorCarrinho);
    else enviarAgradecimento.innerHTML = ("A compra falhou, adicione algo ao seu carrinho primeiro.")
}
//BRINQUEDOS

//Bolas
function brinquedoBola1(){
let valor =40;
let descricao = "Bola de futebol flamengo, vermelha.";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "bola1.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoBola2(){
    let valor =50;
let descricao = "Bola de futebol CBF, branca";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "bola2.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoBola3(){
    let valor =35;
    let descricao = "Bola de basquete";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "bola3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}

//Carrinhos
function brinquedoCarrinho1(){
    let valor =40;
let descricao = "Carrinho movido a pilha, amarelo";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Carrinho1.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoCarrinho2(){
    let valor =20;
let descricao = "Caminhão de plástico, verde";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Carrinho2.png";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoCarrinho3(){
    let valor =25;
let descricao = "Carrinho de flexão, vermelho";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Carrinho3.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
//Massinhas
function brinquedoMassinha1(){
    let valor =15;
let descricao = "Massinha de modelar escolar";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Massinha1.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoMassinha2(){
    let valor =9;
let descricao = "Massinha soft, rosa";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Massinha2.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoMassinha3(){
    let valor =7;
let descricao = "Massinha amoeba, roxa";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Massinha3.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
//Bonecos
function brinquedoBoneco1(){
    let valor =30;
let descricao = "Boneco Hulck";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Boneco1.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoBoneco2(){
    let valor =30;
let descricao = "Boneca baby wee";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Boneco2.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}
function brinquedoBoneco3(){
    let valor =35;
let descricao = "Boneca moranguinho";
valorProduto = valor;
let enviarDescricao = document.getElementsByTagName("p")[0];
let enviarValor = document.getElementsByTagName("p")[1];
let objImg = document.getElementById("modelo");
objImg.src = "Boneco3.jpg";
enviarDescricao.innerHTML = ("Descrição: "+ descricao);
enviarValor.innerHTML = ("Valor do Produto: " + valor);
}

/*//PAPELARIA

//Cartolinas
function papelariaCartolina1(){
    let valor =10;
    let descricao = "teste";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "bola1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}
function papelariaCartolina2(){
    
}
function papelariaCartolina3(){
    
}

//Canetas
function papelariaCaneta1(){

}
function papelariaCaneta2(){
    
}
function papelariaCaneta3(){
    
}

//Cardenetas
function papelariaCardeneta1(){

}
function papelariaCardeneta2(){
    
}
function papelariaCardeneta3(){
    
}

//Pastas
function papelariaPasta1(){

}
function papelariaPasta2(){
    
}
function papelariaPasta3(){
    
}

//ELETRÔNICOS

//Carregadores
function eletronicoCarregador1(){

}
function eletronicoCarregador2(){
    
}
function eletronicoCarregador3(){
    
}

//Fones de Ouvido
function eletronicoFoneOuvido1(){

}
function eletronicoFoneOuvido2(){
    
}
function eletronicoFoneOuvido3(){
    
}

//Cabos USB
function eletronicoCaboUsb1(){

}
function eletronicoCaboUsb2(){
    
}
function eletronicoCaboUsb3(){
    
}

//Cabos P2
function eletronicoCaboP21(){

}
function eletronicoCaboP22(){
    
}
function eletronicoCaboP23(){
    
}

//DIVERSIDADES

//Toucas
function diversoTouca1(){

}
function diversoTouca2(){

}
function diversoTouca3(){

}

//Luvas
function diversoLuva1(){

}
function diversoLuva2(){
    
}
function diversoLuva3(){
    
}

//Bonés
function diversoBone1(){

}
function diversoBone2(){
    
}
function diversoBone3(){
    
}

//Carteiras
function diversoCarteira1(){

}
function diversoCarteira2(){
    
}
function diversoCarteira3(){
    
}*/


