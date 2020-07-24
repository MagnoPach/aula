const inicio = {
    D: 5,
    H: 8,
    M: 12,
    S: 23
}

const termino = {
    D: 9,
    H: 6,
    M: 13,
    S: 23
}

const eventoin = inicio.S + (inicio.M * 60) + (inicio.H * 60 * 60) + (inicio.D * 60 * 60 * 24)
const eventoterm = termino.S + (termino.M * 60) + (termino.H * 60 * 60) + (termino.D * 60 * 60 * 24)

const tempo = parseInt(eventoterm - eventoin)
const W = tempo / (60 * 60 * 24)//calculo para dia
const X = (tempo - W * 60 * 60 * 24) / (60*60)//calculo para hora
const Y = (tempo - W * 60 * 60 * 24 - X * 60 * 60) / 60;//calculo para minuto
const Z = tempo - W * 60 * 60 * 24 - X * 60 * 60 - Y * 60;//calculo para segundos


console.log(`${W} dia (s)`)
console.log(`${X} hora (s)`)
console.log(`${Y} minuto (s)`)
console.log(`${Z} segundo (s)`)

/*
const dias = termino.D - inicio.D

const horas = termino.H - inicio.H

const minutos = termino.M - inicio.M

const segundos = termino.S - inicio.S


if(horas < 0 || horas == 0 ) {
    horas - 24;
    dias + 1
}  

if(minutos < 0 || minutos == 0) {
    minutos - 60;
    horas + 1;
}

if(segundos < 0 || segundos == 0) {
    segundos - 60;
    minutos + 1
}

console.log(`${dias} dia (s)`)
console.log(`${horas} hora (s)`)
console.log(`${minutos} minuto (s)`)
console.log(`${segundos} segundo (s)`)*/