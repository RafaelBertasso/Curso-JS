const alunos = ['João', 'Juliana', 'Ana', 'Caio']
const medias = [10, 8, 7.5, 9]

const listaAlunosMedias = [alunos, medias]
//console.log(listaAlunosMedias)

// lista composta de outra lista
// primeiro o indice da lista externa, e depois o indice do valor da lista interna
//lista externa => listaAlunosMedias[alunos(0)]
//lista interna => alunos['Juliana'[1]]
console.log(`A aluna da posição 1 da lista de alunos é ${listaAlunosMedias[0][1]}, possuindo média ${listaAlunosMedias[1][1]}`)