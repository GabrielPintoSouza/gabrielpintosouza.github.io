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
}
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
//ELETRÔNICOS

//Carregadores
function eletronicoCarregador1(){
    let valor =30;
    let descricao = "Carregador samsung, branco.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carregador1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function eletronicoCarregador2(){
    let valor =25;
    let descricao = "Carregador samsung, preto";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carregador2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}
function eletronicoCarregador3(){
    let valor =20;
    let descricao = "Carregador goldentec, preto";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carregador3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);    
}

//Fones de Ouvido
function eletronicoFoneOuvido1(){
    let valor =35;
    let descricao = "Headset prateado";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "fone1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function eletronicoFoneOuvido2(){
    let valor =15;
    let descricao = "Fones de ouvido comum, preto";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "fone2.png";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);    
}
function eletronicoFoneOuvido3(){
    let valor =30;
    let descricao = "Headset vermelho";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "fone3.png";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}

//Cabos USB
function eletronicoCaboUsb1(){
    let valor =15;
    let descricao = "Cabo USB branco";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabousb1.png";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function eletronicoCaboUsb2(){
    let valor =15;
    let descricao = "Cabo USB preto";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabousb2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}
function eletronicoCaboUsb3(){
    let valor =25;
    let descricao = "Cabo USB verde, comprimento grande e reforçado.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabousb3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}

//Cabos P2
function eletronicoCaboP21(){
    let valor =12;
    let descricao = "Conjunto de cabos p2 para aparelhos eletrônicos";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabop21.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function eletronicoCaboP22(){
    let valor =20;
    let descricao = "Conjunto de cabos p2 reforçados, coloridos";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabop22.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}
function eletronicoCaboP23(){
    let valor =10;
    let descricao = "Cabo p2 fêmea.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cabop23.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);     
}