describe('Fizzbuzz', function(){
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

    it('divisible by 3',function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);

    });

    it('divisible by 5',function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);

    });

    it('divisible by 5',function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);

    });
  });
