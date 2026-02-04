// let num =23456789;
// let rev = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
// }

// console.log( rev);


// let num =234567;
// count=0;
// for(;num>0;num=Math.floor(num/10)){
//     count++;
// }
// console.log(count)


// let n = 10;
// let a = 0, b = 1;

// console.log(a);
// console.log(b);

// for (let i = 3; i <= n; i++) {
//   let c = a + b;
//   console.log(c);

//   a = b;
//   b = c;
// }


// for (let num = 2; num <= 100; num++) {
//   let isPrime = true;

//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

// let arr = [10, 5, 20, 8, 3];
//  let max = Math.max(...arr);
//   let min = Math.min(...arr); 
//   console.log("Max =", max); 
//   console.log("Min =", min);



// function isPalindrome(num) {
//   let temp = num;
//   let rev = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   if (temp == rev) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not Palindrome");
//   }
// }

// isPalindrome(329);


// function areaCircle(r) {
//   let area = 3.14 * r * r;
//   console.log("Area of Circle =", area);
// }

// areaCircle(5);



function monthdays(month) {

  switch (month) {

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 Days");
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 Days");
      break;

    case 2:
      console.log("28 or 29 Days");
      break;

    default:
      console.log("Invalid Month");
  }
}

monthdays(4);