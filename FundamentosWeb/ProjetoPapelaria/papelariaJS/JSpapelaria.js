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
    //Configuração butons 13-24

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

//PAPELARIA

//Cartolinas
function papelariaCartolina1(){
    let valor =5;
    let descricao = "Folha de papel A4, 200 unidades";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "papel1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}
function papelariaCartolina2(){
    let valor =6;
    let descricao = "Cartolina Vermelha";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cartolina1.png";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);   
}
function papelariaCartolina3(){
    let valor =6;
    let descricao = "Cartolina azul";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cartolina2.png";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}

//Canetas
function papelariaCaneta1(){
    let valor =10;
    let descricao = "Caneta roxa especial, infravermelho";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "caneta1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}
function papelariaCaneta2(){
    let valor =2;
    let descricao = "Caneta bic avulsa";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "caneta2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);  
}
function papelariaCaneta3(){
    let valor =5;
    let descricao = "Caneta colorida avulsa";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "caneta3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}

//Cardenetas
function papelariaCardeneta1(){
    let valor =14;
    let descricao = "Cardeneta Magali, rosa";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cardeneta1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}
function papelariaCardeneta2(){
    let valor =14;
    let descricao = "Cardeneta Bidu, azul";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cardeneta2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);   
}
function papelariaCardeneta3(){
    let valor =18;
    let descricao = "Cardeneta Flash, vermelha";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "cardeneta3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);    
}

//Pastas
function papelariaPasta1(){
    let valor =5;
    let descricao = "Pastas escolares de plástico colorido";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "pasta1.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor); 
}
function papelariaPasta2(){
    let valor =7;
    let descricao = "Pasta escolar grande, plástico transparente e verde";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "pasta2.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);    
}
function papelariaPasta3(){
    let valor =12;
    let descricao = "Pasta escolar vermelha com alça para segurar";
    valorProduto = valor;
    let enviarDescricao = document.getElementsByTagName("p")[0];
    let enviarValor = document.getElementsByTagName("p")[1];
    let objImg = document.getElementById("modelo");
    objImg.src = "pasta3.jpg";
    enviarDescricao.innerHTML = ("Descrição: "+ descricao);
    enviarValor.innerHTML = ("Valor do Produto: " + valor);    
}