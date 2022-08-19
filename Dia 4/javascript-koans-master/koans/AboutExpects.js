describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  // Contemplaremos a verdade testando a realidade, por meio de expectativas de especificações.

  // 'deveria esperar verdade'
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true 
    // Sua jornada começa aqui: Substitua a palavra false por true
    expect(true).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  // Para entender a realidade, devemos comparar nossas expectativas com a realidade.

  // 'deveria esperar igualdade'
  it('should expect equality', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  // Algumas formas de afirmar a igualdade são melhores que outras.

  // 'deveria afirmar a igualdade de uma maneira melhor'
  it('should assert equality a better way', function() {
    var expectedValue = 2;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
  // toEqual() compara usando igualdade comum.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  // Às vezes você precisa ser preciso sobre o tipo que você "digita".

  // 'deve afirmar a igualdade com ==='
  it('should assert equality with ===', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
  // toBe() sempre usará === para comparar.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  // Às vezes, pediremos que você preencha os valores.

  // 'deveria ter preenchido os valores'
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(1 + 1);
  });
});
