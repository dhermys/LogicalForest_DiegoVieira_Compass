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

verificarVelocidade(130);

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
}