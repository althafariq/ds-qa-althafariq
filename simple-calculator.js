const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Chooese the operation:');
console.log('1. Add');
console.log('2. Subtract');

rl.question('1 or 2? : ', (choice) => {
  rl.question('input first number: ', (firstInput) => {
    const num1 = parseFloat(firstInput);
    if (isNaN(num1)) {
      console.log('invalid input');
      rl.close();
      return;
    }

    rl.question('input second number: ', (secondInput) => {
      const num2 = parseFloat(secondInput);
      if (isNaN(num2)) {
        console.log('invalid input');
        rl.close();
        return;
      }

      let result;
      switch (choice) {
        case '1':
          result = num1 + num2;
          console.log(`result: ${num1} + ${num2} = ${result}`);
          break;
        case '2':
          result = num1 - num2;
          console.log(`result: ${num1} - ${num2} = ${result}`);
          break;
        default:
          console.log('invalid input, choose 1 or 2 only!');
          break;
      }

      rl.close();
    });
  });
});
