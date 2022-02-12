// Sistema de cadastro para eventos 

let dataAtual = new Date();
let dataEvento = new Date('02/15/2022')
let tipoCadastro = "Participante"
let idadeParticipante = 18
let listaParticipantes = ["Amanda", "Catarina", "João", "Juliana", "Harry"]

if(dataAtual > dataEvento) {
    console.log("Data inválida") 
} else if(dataAtual < dataEvento){

if (tipoCadastro != "Participante") {
    console.log("Continue o Cadastro")
} else if(tipoCadastro == "Participante"){

if(idadeParticipante < 18){
    console.log("Idade Participante inválida")

} else if (listaParticipantes.length <6) {
    for(let contador = 0; contador < 6; contador ++)
         console.log(listaParticipantes[contador])
} else{
    console.log("Cadastro não permitido por ter excedido o limite de participantes")
 
}}}