function pagcarregada(){
    alert("Página Carregada!!")
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Valeu! obrigado por ter clicado!")
}

function redirecionar(){
    window.open("https://www.hpioxii.com.br/");
    //window.location.href = "https://www.hpioxii.com.br/";
}

function trocar(elemento){
    
        elemento.innerHTML = "Obrigado por passar o Mouse 1"
    //document.getElementById("movemouse").innerHTML = "Obrigado por passar o Mouse!"
    //alert("trocar texto")
}

function voltar(elemento){
   
        elemento.innerHTML = "Passe o mouse aqui..."
  
    //document.getElementById("movemouse").innerHTML = "Passe o mouse aqui..."

}

function funcaoMudar(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function troca(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 15));
alert(troca("Vai Japão", "Japão", "Brasil"))
*/

/*
var d = new Date();
console.log(d.getMonth()+1);
console.log(d.getMinutes());
console.log(d.getHours());
console.log(d.getTime())
console.log(d.getDate());
*/

/*
for(c = 0; c <= 5; c++){
    console.log(c)
}
*/


/*
var count = 0;
while (count <=5){
    console.log(count)
    count++
};
*/


/*
var idade = prompt("Qual é sua idade?");
if (idade >= 18){
    alert("Você é maior de idade!")
}else{
    alert("Você é 'de menor....' rsrsrs...")
};
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
console.log(frutas[1].nome)
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome)
console.log(fruta.cor)
*/

//var nome = "Demiraldo Santos"
//var idade = 54
//var idade2 = 10
//var frase = "Japão é o melhor time do mundo"

//var lista = ["maçã","pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//lista.push("uva");
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

//alert(idade + idade2 + "meu primeiro js....  " + nome + " testanto variáveis....");
//console.log(nome);
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"))