var _; //globals

/* Esta seção usa uma extensão funcional conhecida como Underscore.js - http://documentcloud.github.com/underscore/
      "Underscore é uma biblioteca de utilitários para JavaScript que fornece muito suporte de programação funcional
       que você esperaria em Prototype.js (ou Ruby), mas sem estender nenhum dos objetos JavaScript integrados.
       É a gravata para combinar com o smoking do jQuery."
  */

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */

      // Sobre as funções de ordem superior
describe("About Higher Order Functions", function () {

  // deve usar o filtro para retornar itens da matriz que atendem a um critério
  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd = _(numbers).filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual([ 1, 3 ]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });

  // deve usar 'map' para transformar cada elemento
  it("should use 'map' to transform each element", function () {
    var numbers = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual([ 2, 3, 4 ]);
    expect(numbers).toEqual([ 1, 2, 3 ]);
  });

  // deve usar 'reduce' para atualizar o mesmo resultado em cada iteração
  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers = [1, 2, 3];
    var reduction = _(numbers).reduce(
            function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);

    expect(reduction).toBe(6);
    expect(numbers).toEqual([ 1, 2, 3 ]);
  });

  // deve usar 'forEach' para iteração simples
  it("should use 'forEach' for simple iteration", function () {
    var numbers = [1,2,3];
    var msg = "";
    var isEven = function (item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);

    expect(msg).toEqual('falsetruefalse');
    expect(numbers).toEqual([ 1, 2, 3 ]);
  });

  // deve usar 'all' para testar se todos os itens passam na condição
  it("should use 'all' to test whether all items pass condition", function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });

  // deve usar 'any' para testar se algum item passa na condição
  it("should use 'any' to test if any items passes condition" , function () {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  // deve usar range para gerar um array
  it("should use range to generate an array", function() {
      expect(_.range(3)).toEqual([ 0, 1, 2 ]);
      expect(_.range(1, 4)).toEqual([ 1, 2, 3 ]);
      expect(_.range(0, -4, -1)).toEqual([ 0, -1, -2, -3 ]);
  });

  // deve usar flatten para facilitar o trabalho com arrays aninhados
  it("should use flatten to make nested arrays easy to work with", function() {
      expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([ 1, 2, 3, 4 ]);
  });

  // deve usar chain() ... .value() para usar várias funções de ordem superior
  it("should use chain() ... .value() to use multiple higher order functions", function() {
      var result = _([ [0, 1], 2 ]).chain()
                       .flatten()
                       .map(function(x) { return x+1 } )
                       .reduce(function (sum, x) { return sum + x })
                       .value();

      expect(result).toEqual(6
        );
  });

});

