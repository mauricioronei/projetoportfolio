// Variáveis

/* Nomes simbólicos para receber algum valor
    - Atalhos para códigos
    - Identificadores
    - 3 palavras reservadas para criar uma variável:
        * var
        * let
        * const
*/


var clima = "Frio"

console.log(clima) // vai retornar a string Frio
clima = "calor" //alterei o valor da variável

const dia = "Domingo" // Essa variável é constante e, diferente da var, não posso alterar seu valor no código


let = mes="Abril"

/* JS é um linguagem levemente tipada e dinâmica
o que significa que não preciso declarar o tipo de variável
o tipo é assumido com o que gravo na variável
e altera conforme seu conteúdo é alterado
*/

console.log(type of mes) // vai retornar o tipo de variável que será string porque o conteúdo é Abril
mes="4" //vai retornar que a variável é number, porque agora o seu conteúdo é um número


/*
NOMES DE VARIÁVEIS

- Posso:
* Iniciar com esses caracteres especiais: _ $
* Iniciar com letras
* Colocar acentos
* Letras maiúsculas e minúsculas fazem diferença

- Não posso:
* Iniciar com números
* Colocar espaços vazio nos nomes

- Ideal:
* Criar nomes que fazem sentido
* Que explique o que a variável é ou faz
* camelCase
* snake_case
* Escrever em inglês
*/

// variable declaration

let name

// variable assignment 

name ="Mayke"

// descobrindo tipo da variável

console.log(typeof name)

// variable clustering

let age,gender
age="45"
gender="masculine"

console.log(name, age, gender)

//Writing a text with variables

//Mike tem 45 anos

console.log('O' + name + ' tem' + age ' anos')


//interpolando valor com template literals ou template strings

console.log('O ${name} tem ${age} anos')

