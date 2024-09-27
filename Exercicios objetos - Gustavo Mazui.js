/////////////////////////////////////////////////// Exercícios de interpretação de código 1 

/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //mostra o integrante que está na posição 0, Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //mostra o tamanho da posição 1 de elenco, Selton Mello
console.log(filme.transmissoesHoje[2]) //imprime a array 2 de transmissoes Globo, 14h */ 


/////////////////////////////////////////////////// Exercícios de interpretação de código 2

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) 
console.log(gato)
console.log(tartaruga) 

//a) nome:'Juca', idade: 3, Raça:'SRD' , nome:'Juca', idade: 3, Raça:'SRD' , nome:'Juca', idade: 3, Raça:'SRD' 

//b) Copia e substitui pelo o objeto/array anterior inteiro */  


/////////////////////////////////////////////////// Exercícios de interpretação de código 3

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))  
console.log(minhaFuncao(pessoa, "altura")) */

//a) Será impressso false, undefined 
//b) false, por não existir a string "backender" no objeto */ 


/////////////////////////////////////////////////// Exercícios de escrita de código 1 

/* const pessoa = {
   nome: "Gustavo", 
   apelidos: [" Mazui ", " gu ", " gus "]
   
}

function pessoas(pessoa) { 
   console.log (" Eu sou " + pessoa.nome + " mas pode me chamar de :" + pessoa.apelidos)
   }

pessoas(pessoa); 
 
//b 
const seila = {
   ...pessoa, 
   apelidos:[" sei la ", " sei lá ", " sei la "],
}
pessoas(seila) */ 

/////////////////////////////////////////////////// Exercícios de escrita de código 2

/* const info = {
   nome:"Cleiton",
   idade:85 , 
   profissao:"caminhao",
}
const info2 = {
   nome: "robson" , 
   idade:60, 
   profissao:"apreciador de caminhao",
}

function asldkak (info) {
   let resultado = [info.nome, info.nome.length, info.idade, info.profissao, info.profissao.length]
   return resultado
}
console.log (asldkak(info)) */ 


/////////////////////////////////////////////////// Exercícios de escrita de código 3

/* const carrinho = []
frutaSacolao = {
   nome:" Maça", 
   disponibilidade: true
}

frutaSacolao2 = {
   nome:" Banana", 
   disponibilidade: true}

   frutaSacolao3 = {
      nome:" Pera", 
      disponibilidade: true}

      function sacolao (frutas, frutas1, frutas2) {
      carrinho.push(frutaSacolao)
      carrinho.push(frutaSacolao2)
      carrinho.push(frutaSacolao3)
      }
      sacolao(carrinho)
      console.log (carrinho) */ 
