const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let marks = [];
let i = 0;


    rl.question("Enter mark: ", (num1) => {
    rl.question("Enter mark: ", (num2) =>{
    rl.question("Enter mark: ", (num3) =>{
    rl.question("Enter mark: ", (num4) =>{
    num=Number(num1)
    num=Number(num1)
    num=Number(num1)
    num=Number(num1)
    let total = 0;

    for (let j = 0; j < marks.length; j++) {
      total += marks[j];
    }

    let avg = total / marks.length;

    console.log("Marks:", marks);
    console.log("Total:", total);
    console.log("Average:", avg);

    rl.close();
  })
})
})
});