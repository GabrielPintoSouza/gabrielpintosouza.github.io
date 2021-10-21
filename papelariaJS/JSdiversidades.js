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
//DIVERSIDADES

//Toucas
function diversoTouca1(){
    let valor =25;
    let descricao = "Touca para adulto, preta e com pompom";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "touca1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoTouca2(){
    let valor =20;
    let descricao = "Touca adulta preta";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "touca2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoTouca3(){
    let valor =30;
    let descricao = "Touca adulta branca, com pompom e tapa orelha.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "touca3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}

//Luvas
function diversoLuva1(){
    let valor =18;
    let descricao = "Luva Infantil Estampada, cores diversas";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "luva1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoLuva2(){
    let valor =22;
    let descricao = "Luva Infantil vermelho natal.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "luva2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);   
}
function diversoLuva3(){
    let valor =20;
    let descricao = "Luva Infantil estampada com desenho, cores variadas.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "luva3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}

//Bonés
function diversoBone1(){
    let valor =20;
    let descricao = "Boné com estampa vascaína.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "bone1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoBone2(){
    let valor =25;
    let descricao = "Boné com estampa flamenguista.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "bone2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoBone3(){
    let valor =30;
    let descricao = "Boné camuflado.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "bone3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);   
}

//Carteiras
function diversoCarteira1(){
    let valor =40;
    let descricao = "Carteira couro legítimo.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carteira1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function diversoCarteira2(){
    let valor =30;
    let descricao = "Carteira com porta cartões.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carteira2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);   
}
function diversoCarteira3(){
    let valor =45;
    let descricao = "Carteira feminina.";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "carteira3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}