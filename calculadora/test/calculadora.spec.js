import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/calculadora.js'

const expect = chai.expect

describe('Testes de adição', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em -1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve somar -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })
    it('Deve somar 4.5 e 4.5 resultando em 9', () => {
        let resultado = Calculadora.soma(4.5, 4.5)
        expect(resultado).to.be.eq(9)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair -4 e 5 resultando em -9', () => {
        let resultado = Calculadora.sub(-4, 5)
        expect(resultado).to.be.eq(-9)
    })
    it('Deve subtrair -4 e -5 resultando em 1', () => {
        let resultado = Calculadora.sub(-4, -5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve subtrair 4.5 e 4.5 resultando em 0', () => {
        let resultado = Calculadora.sub(4.5, 4.5)
        expect(resultado).to.be.eq(0)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 4 por 5 resultando em 20', () => {
        let resultado = Calculadora.mult(4, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar -4 por 5 resultando em -20', () => {
        let resultado = Calculadora.mult(-4, 5)
        expect(resultado).to.be.eq(-20)
    })
    it('Deve multiplicar -4 por -5 resultando em 20', () => {
        let resultado = Calculadora.mult(-4, -5)
        expect(resultado).to.be.eq(20)
    })
    it('Deve multiplicar 4.5 por 4.5 resultando em 20.25', () => {
        let resultado = Calculadora.mult(4.5, 4.5)
        expect(resultado).to.be.eq(20.25)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 4 por 5 resultando em 0.8', () => {
        let resultado = Calculadora.div(4, 5)
        expect(resultado).to.be.eq(0.8)
    })
    it('Deve dividir -4 por 5 resultando em -0.8', () => {
        let resultado = Calculadora.div(-4, 5)
        expect(resultado).to.be.eq(-0.8)
    })
    it('Deve dividir -4 por -5 resultando em 0.8', () => {
        let resultado = Calculadora.div(-4, -5)
        expect(resultado).to.be.eq(0.8)
    })
    it('Deve dividir 4.5 por 4.5 resultando em 1', () => {
        let resultado = Calculadora.div(4.5, 4.5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve dividir 4.5 por 4.5 resultando em 1', () => {
        let resultado = Calculadora.div(4.5, 4.5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve tentar dividir 0 por 0 resultando em "Resultado indefinido"', () => {
        let resultado = Calculadora.div(0, 0)
        expect(resultado).to.be.eq('Resultado indefinido')
    })
    it('Deve tentar dividir 4 por 0 resultando em "Não é possível dividir por zero"', () => {
        let resultado = Calculadora.div(4, 0)
        expect(resultado).to.be.eq("Não é possível dividir por zero")
    })
})

describe('Testes de potenciação de 2', () => {
    it('Deve elevar 4 ao quadrado resultando em 16', () => {
        let resultado = Calculadora.pot(4)
        expect(resultado).to.be.eq(16)
    })
    it('Deve elevar -5 ao quadrado resultando em 25', () => {
        let resultado = Calculadora.pot(-5)
        expect(resultado).to.be.eq(25)
    })
    it('Deve elevar 4.5 ao quadrado resultando em 20.25', () => {
        let resultado = Calculadora.pot(4.5)
        expect(resultado).to.be.eq(20.25)
    })
    it('Deve elevar -5.5 ao quadrado resultando em 30.25', () => {
        let resultado = Calculadora.pot(-5.5)
        expect(resultado).to.be.eq(30.25)
    })
})

describe('Testes de raiz quadrada', () => {
    it('Deve calcular a raiz quadrada de 4 resultando em 2', () => {
        let resultado = Calculadora.raiz(4)
        expect(resultado).to.be.eq(2)
    })
    it('Deve calcular a raiz quadrada de 5.5 resultando em 2.345207879911715', () => {
        let resultado = Calculadora.raiz(5.5)
        expect(resultado).to.be.eq(2.345207879911715)
    })
    it('Deve tentar calcular a raiz quadrada de -4 resultando em "Entrada inválida"', () => {
        let resultado = Calculadora.raiz(-4)
        expect(resultado).to.be.eq("Entrada inválida")
    })
})