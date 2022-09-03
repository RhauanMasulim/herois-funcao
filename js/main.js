// validar universo
function validarUniverso(){ 
    var x = document.getElementById("universo").value;
    var a = document.querySelector("div.escolha-universo");
    var b = document.querySelector("div.escolha-heroi");
    if(x=="Marvel"){
        document.getElementById("respostaU").innerHTML = `${x} é um universo válido!`;
        //troca de cor
        a.style.background='blue'
        b.style.background='blue'
    }
    else if(x=="DC"){
        document.getElementById("respostaU").innerHTML = `${x} é um universo válido!`;
        //troca de cor
        a.style.background='blue'
        b.style.background='blue'
    }
    else{
        document.getElementById("respostaU").innerHTML = `${x} não é um universo válido!`;
        a.style.background='red'
    }
}
// validar herói 
    
function validarHeroi(){
    var x = document.getElementById("universo").value;
    var y = document.getElementById("heroi").value;
    var b = document.querySelector("div.escolha-heroi");
  
    if(x=="Marvel" && (y=="Hulk" || y=="Capitão América" || y=="Homem de Ferro"|| y=="Pantera Negra"|| y=="Doutor Estranho"))
    {
        document.getElementById("respostaH").innerHTML = `${y} é um herói da ${x}!`;
        b.style.background='blue'
    }
    else if(x=="DC" && (y=="Superman"||y=="Batman"||y=="Mulher Maravilha"||y=="Lanterna Verde"||y=="Flash"))
    {
        document.getElementById("respostaH").innerHTML = `${y} é um herói da ${x}!`;
        b.style.background='blue'
    }    
    else
    {
        document.getElementById("respostaH").innerHTML = `Opção inválida <br> OPÇÃO 1: Verifique se escreveu corretamente. <br> OPÇÃO 2: ${y} não pertence a ${x}!`;
        b.style.background='red'
    }
        
}

    
// calcular herói
function funcCalc(){
    areaMostrar = document.getElementById('mostrar-heroi');
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado = eval(parseInt(num1) + operador + parseInt(num2));
            
    var meuHTML = "";
    valorRepetir = resultado; /*VALOR DA REPETIÇÃO COM BASE NO CÁCULO*/
    var x = document.getElementById("universo").value;
    var y = document.getElementById("heroi").value;
       

    for (var i = 1; i <= valorRepetir; i++) {
        meuHTML += `<p>${y}</p>`;
    }
    areaMostrar.innerHTML += meuHTML;
}