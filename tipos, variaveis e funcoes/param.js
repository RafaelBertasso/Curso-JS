function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}
// console.log(nomeIdade('Rafael', 19))

function soma(a,b){
    return a + b
}

// colocar um valor padrão para os parametros para não dar erro
function multiplica (a = 1,b = 1) {
    return a * b
}

//console.log(multiplica(2,2))
console.log(multiplica(soma(4,1), soma(3,3)))
console.log(multiplica(soma(4,5), soma(3,3)))
console.log(multiplica(soma(4,5)))