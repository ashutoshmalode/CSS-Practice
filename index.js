// interview questions coding = https://www.fullstacktutorials.com/interviews/javascript-coding-questions-answers-6.html


// let arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr1 = []
// for (let i=0 ; i<arr.length ; i++){
// if (arr[i] > 5){
// arr1.push(arr[i])
// }
// }
// console.log(arr1)




// problem 02
// let arr = [1, 2, 5, 10, 20];

// my Code :-
// let sum = 0
// for (i=0 ; i<arr.length ; i++){
//     sum += arr[i]
// }
// console.log(sum)

// Actual Solution :-
// let sum = 0;
// for (let i in arr) {
//   sum += arr[i];
// }
// console.log(sum)




// problem 03
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(a[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(a[i]), 1000);
//   }





//   Problem 04
// let name = "Full Stack Tutorials, Latest Interview Questions and Answers!";

// //startsWith
// console.log(name.startsWith("Full")); // true
// console.log(name.startsWith("full")); // false
// console.log(name.startsWith("Tutorials")); // false
// console.log(name.startsWith("Tutorials", 11)); // true

// //endsWith
// console.log(name.endsWith("Answers!")); // true
// console.log(name.endsWith("answers!")); // false




// Problem 5
// find the output
// var a=3;
// var b=a++;
// var c=++a;
// console.log(a,b,c)




// Problem 6
// let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// let a = 10;
// var a = 20;
// console.log(a);




// Problem 10 ----------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(i= 0 ; i<arr.length ; i++){
//     console.log(arr[i])              
// }                                            // For

//  let forEachSequence = arr.forEach(function(e){
//     console.log(e)                 
// })                                                     // For Each

// let findArr = arr.find(function(i){
//       return i === 5;
// })
// console.log(findArr)                            // Find

// let mapArr = arr.map(function(i){
//     return i * 5;
// })
// console.log(mapArr)                             // Map

// let filterArr = arr.filter(function(i){
//     return i > 5;
// })
// console.log(filterArr)                           // Filter

// let reduceArr = arr.reduce(function(i , e){
//     return i + e;
// }, 0)
// console.log(reduceArr)                               // Reduce




// Problem no = 08 --------------
// arr = [1 , 2, 3, 4, 5]

// let s = arr.concat(arr);
// console.log(s)                            // Push




// // Problem no = 07
// function numOnly(a){
//     if (!isNaN(a)) {
//         console.log ("true")
//     } else {
//         console.log ("false")
//     }
// }
// numOnly(5);                      // True False 


// Problem no = 06
// let arrs = [1, 2, 3, 4, 5];
// // let brr;
// // brr = arrs;
// // arrs.splice(0)  // 1
// // arrs.length = 0 // 2
// arrs = [];  // 3
// console.log(arrs);                     // Empty array making


// Problem no = 05
// let str = "Hello world";
// let splittedStr = str.split(" ");
// let reverseStr = splittedStr.reverse();
// let joinStr = reverseStr.join(" ");
// console.log(joinStr)                       // Reverse string


// Problem no = 04
// arr = [1, 2, 1, 'A', 'Z', 'C', 'A', 'B', 3, 2, 4]
// let filterArr = arr.filter(function(e , i){
// return arr.indexOf(e) === i;
// })
// console.log(filterArr)                      // Remove Duplicate elements


// Problem No = 03
// for (let i=0; i<= 100; i++){
//     if (i % 3 == 0){
//         console.log("Ashutosh")
//     } else if (i % 5 == 0 ){
//         console.log("Anirudh")
//     }
// }                                            // Dividing by 3 , 5


// Problem no = 02

// let character = "I want to count the number of occurences in this string"
// let a = character.indexOf("occurences");
// let word = "occurences"
// let b = word.lastIndexOf("c")
// console.log(a + b)                          // Find Position Of any character







// Problem = 01
// arr = [0, 1, 2, 4, 5, 6]
// let n = arr[arr.length-1]
// let a = (n*(n+1)/2);
// let b = arr.reduce(function(i , e){
//         return i + e;
//     }, 0)
//     console.log(a-b)                      // Find Missing No From sequence