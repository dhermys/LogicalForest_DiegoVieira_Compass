function Muppet(age, hobby) {
  this.age = age;
  this.hobby = hobby;

  this.answerNanny = function(){
	return "Everything's cool!";
  }
}

function SwedishChef(age, hobby, mood) {
  Muppet.call(this, age, hobby);
  this.mood = mood;

  this.cook = function() {
    return "Mmmm soup!";
  }
}

SwedishChef.prototype = new Muppet();

// Sobre herança
describe("About inheritance", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  // deve ser capaz de chamar um método no objeto derivado
  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual('Mmmm soup!');
  });

  // deve ser capaz de chamar um método no objeto base
  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  // deve definir os parâmetros do construtor no objeto base
  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual('cooking');
  });

  // deve definir os parâmetros do construtor no objeto derivado
  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual('chillin');
  });
});

// http://javascript.crockford.com/prototypal.html
Object.prototype.beget = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

function Gonzo(age, hobby, trick) {
  Muppet.call(this, age, hobby);
  this.trick = trick;

  this.doTrick = function() {
    return this.trick;
  }
}

//não precisa mais chamar o construtor Muppet (tipo base)
//no longer need to call the Muppet (base type) constructor
Gonzo.prototype = Muppet.prototype.beget();

// Sobre a melhoria da herança de Crockford
describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
  this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");
  });

  // deve ser capaz de chamar um método no objeto derivado
  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual('eat a tire');
  });

  // deve ser capaz de chamar um método no objeto base
  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  });

  // deve definir os parâmetros do construtor no objeto base
  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual("daredevil performer");
  });

  // deve definir os parâmetros do construtor no objeto derivado
  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual('eat a tire');
  });
});
