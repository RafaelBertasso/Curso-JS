//conversão implicita
// == (o int se tornou string)

let numero = 123
let numString = '123'

console.log(numero == numString)


//conversão explícita
//Number() = string -> numero
//String() = numero -> string

console.log(numero + Number(numString))
