// console.log("Aula JavaScript")

// Mini-projeto 1

/* let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b); */

// Mini-projeto 2

/* let valorMaior = max(5000, 6000);
console.log(valorMaior);

function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
} */

// Mini-projeto 3

/* const resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
} */

// Mini-projeto 4

/* verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
    }
} */

// Mini-projeto 5

/* exibirTipo(10);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
        console.log('Par');
        else
        console.log('Impar');
    }
} */

// Mini-projeto 6

/* const filme = {
    titulo: 'Vingadores',
    ano: '2018',
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
} */

// Mini-projeto 7

/* somar(50);

function somar (limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if(i % 3 === 0)
        multiplosDe3 += i;
        if(i % 5 === 0)
        multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
} */

// Mini-projeto 8 

/* const array = [85, 90, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno (notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
} */

// Mini-projeto 9

/* exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
} */

// Mini-projeto 10

/* exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero) {
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
} */

// Mini-projeto 11

/* let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave, endereco[chave]);
}

exibirEndereco(endereco); */

// Mini-projeto 12

/* function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1;

function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco3
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2)); */

// Mini-projeto 13

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);