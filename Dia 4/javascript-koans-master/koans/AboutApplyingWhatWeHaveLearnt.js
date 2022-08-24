var _; //globals

// Sobre como aplicar o que aprendemos
describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  // dado que sou alérgico a nozes e odeio cogumelos, deve encontrar uma pizza que eu possa comer (imperativo)
  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  // dado que sou alérgico a nozes e odeio cogumelos, deve encontrar uma pizza que eu possa comer (funcional)
  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(0);
  });

  /*********************************************************************************/

  // deve somar todos os números naturais abaixo de 1000 que são múltiplos de 3 ou 5 (imperativo)
  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  // deve somar todos os números naturais abaixo de 1000 que são múltiplos de 3 ou 5 (funcionais)
  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = FILL_ME_IN;    /* try chaining range() and reduce() */

    expect(233168).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/

  // deve contar a ocorrência do ingrediente (imperativo)
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  // deve contar a ocorrência do ingrediente (funcional)
  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */

  /* DESCOMENTAR PARA CRÉDITO EXTRA */
   /*
   it("deve encontrar o maior fator primo de um número composto", function () {

   });

   it("deve encontrar o maior palíndromo feito do produto de dois números de 3 dígitos", function () {

   });

   it("deve encontrar o menor número divisível por cada um dos números de 1 a 20", function () {


   });

   it("deve encontrar a diferença entre a soma dos quadrados e o quadrado das somas", function () {

   });

   it("deve encontrar o 10001º primo", function () {

   });
   */
});
