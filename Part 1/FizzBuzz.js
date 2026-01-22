let num = 1;
let index = 1;
for (let index = 1; index <= 100; index++) {
  if ((num * index) % 3 == 0 && (num * index) % 5 == 0) {
    console.log('FizzBuzz');
  } else if ((num * index) % 3 == 0 || (num * index) % 5 == 0) {
    if ((num * index) % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  } else {
    console.log(num * index);
  }
}
