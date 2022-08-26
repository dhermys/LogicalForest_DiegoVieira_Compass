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

