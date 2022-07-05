var carro = new Object();
 
carro.modelo = 'Uno';
carro.ano = 1999;
carro.pneu = 'Aro 15';
carro.cor = 'Preto';
carro.transmissao = 'CVT';

// Exibe o objeto com todos os atributos e valores
console.log(carro.ano)

// Lista todos os nomes de todos os atributos dos objetos 
console.log(Object.keys(carro))

// Lista todos os valores de todos os atributos dos objetos 
console.log(Object.values(carro))