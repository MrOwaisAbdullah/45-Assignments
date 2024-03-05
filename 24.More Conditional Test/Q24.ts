//writing more Conditional Tests by using different operators and functions

let str1 = "Hello world";
let str2 = "hello world";
let num1 = 20;
let num2 = 60;
let num3 = 45;
let num4 = 1;
let array1 = ["Owais", "Abdullah", "Salaar", "Anas"];

console.log("Is str1 is equal to str2? I predict False");
console.log(str1 === str2);

console.log("Is str1 is equal to str2 in lowerCase? I predict True");
console.log(str1 === str2.toLocaleLowerCase()); 

console.log("Is num1 is equal to num2? I predict false");
console.log(num1 === num2);

console.log("Is num1 is not equal to num3? I predict true");
console.log(num1!== num3);

console.log("Is num2 is greater than num3? I predict true");
console.log(num2 > num3);

console.log("Is num1 is less than num4? I predict false");
console.log(num1 < num4);

console.log("Is num4 is greater than or equal to num3? I predict false");
console.log(num4 >= num3);

console.log("Is num1 is less than or equal to num2? I predict true");
console.log(num1 <= num2);

console.log("Is num1 is greater than 15 and less than or equal to 20? I predict true");
console.log(num1 > 15 && num1 <= 20);

console.log("Is num3 is less than num2 or equals to 50? I predict true");
console.log(num3 < num2 || num3 === 50);

console.log("Is 'Owais' is in array1? I predict true");
console.log(array1.includes("Owais"));

console.log("Is 'Zain' is not in array1? I predict true");
console.log(!array1.includes("Zain"));
