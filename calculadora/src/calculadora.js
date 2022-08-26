export default class Calculadora {

    static soma(a, b) {
        return a + b
    }

    static sub(a, b) {
        return a - b
    }

    static mult(a, b) {
        return a * b
    }

    static div(a, b) {
        if (a === 0 && b === 0) {
            return "Resultado indefinido"
        } else if (a !== 0 && b === 0) {
            return "Não é possível dividir por zero"
        } else {
            return a / b
        }
    }

    static pot(a) {
        return a ** 2
    }

    static raiz(a) {
        if (a > -1) {
            return a ** 0.5
        } else {
            return "Entrada inválida"
        }
    }

}