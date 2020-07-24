/*============================================================================
## OPERADORES DE COMPARAÇÃO

- > Maior
- < Menor
- >= Maior igual a
- <= Menor igual a
- == igual a
- === igual e do mesmo tipo
- != diferente de
- !==Diferente, inclusive do tipo
==============================================================================*/

//DESAFIO 1
//verificar se a pessoa é maior de 18 anos
//se sim, deixar entrar, se não, bloquear a entrada
//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos

const idade = 17

console.log(idade > 18)

if(idade >= 18) {
    console.log('Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}



if(idade === 17) {
    console.log('Volte quando fizer 18 anos')
}


/*============================================================================
    OPERADORES DE LÓGICOS
    && "E" AS duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    || "OU" Uma das condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    ! "NÃO" Nega uma condição
=============================================================================*/

/*console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false*/

const idade = 18

if(!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}


/*============================================================================
    OPERADORES DE ARITMÉTICOS 

    * Multiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração
=============================================================================*/

console.log( 2 * 2 ) // 4
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 2 + 2 ) // 4
console.log( 2 / 2 ) // 0













