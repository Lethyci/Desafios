const nome = 'Lethycia';
let idade = 25;
let linguagens = 'HTML, CSS e JavaScript'

/*Respondendo às perguntas*/

/*console.log("Qual o seu nome?");
console.log("Meu nome é " + nome + ".");

console.log("Quantos anos você tem?");
console.log("Eu tenho " + idade + " anos.");

console.log("Estou estudando " + linguagens + ".");*/

/*Mensagem na tela*/

console.log("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagens + "!");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagens + "!");

const fraseNome = prompt("Qual é o seu nome?");
const fraseIdade= prompt("Quantos anos você tem?");
const fraseLinguagens= prompt("Quais linguagen de programação você está estudando?");
alert("Olá " + fraseNome + ", você tem " + fraseIdade + " anos e já está aprendendo " + fraseLinguagens + "!");

/*Desafio extra*/

let gosto = prompt("Você gosta de estudar " + linguagens + "?  Responda com o número 1 para SIM ou 2 para NÃO.");

if(gosto == 1){
  alert("Muito bom! Continue estudando e você terá muito sucesso.")
}else if (gosto == 2){
  alert("Ahh que pena... Já tentou aprender outras linguagens?")
}else{
  alert("Resposta inválida")
}