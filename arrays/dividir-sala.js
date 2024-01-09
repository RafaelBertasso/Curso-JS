const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

// alunos do indice 0 ao indice 9
// não altera a lista original
const sala1 = alunos.slice(0, alunos.length / 2)
console.log(sala1)

const sala2 = alunos.slice(alunos.length / 2)
console.log(sala2)