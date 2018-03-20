function Fizzbuzz() {
  var array = new Array(100);
  for(i = 1; i <=100 ; i++){
    switch(true){
      case(this.isDivisibleByFifteen(i)):
      console.log('FizzBuzz');
      break;

      case(this.isDivisibleByThree(i)):
      console.log('Fizz');
      break;

      case(this.isDivisibleByFive(i)):
      console.log('Buzz');
      break;

      default:
      console.log(i);
    }
    }
  };
Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
}
Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
}
Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
}
