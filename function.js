// let a=57;
// function show(){
//     console.log(a)
// }
// show();
// console.log(a)

// 
// functionscope
// function code(){
//     let y=899;
//     console.log(y);
// }
// code();

// block scope
// function test(){
//     let u =78;
//     const v=789;
//   console.log(u)
// }
// test();


// 
// lexical scope
function test(){
    let n=7777;
    
    function inner(){
        console.log(n)
    }
    inner();
    test();
    console.log(n)
}
