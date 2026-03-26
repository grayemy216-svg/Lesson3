//let name = "winnie";
//console.log(name);
//let age = 25;
//console.log(age);
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
let difference = num1 - num2;
console.log(difference);
console.log("num1 * num2:");
console.log(num1 * num2);
console.log("num1 / num2:");
console.log(num1 / num2);
console.log("num1 % num2:");
console.log(num1 % num2);
let x = true;
let y = false;
console.log(x && y);
let z = 11;
console.log(typeof z);
let a ="winnie";
console.log(typeof a);
//prompt the user to enter a number
//check if the number is even or odd
//display that the number the user used is even or odd
let number = prompt("Enter a number")
if(number % 2 == 0){
alert(`${number} is even`)
console.log(`${number} is even`)
} else{
    alert(`${number} is odd`)
    console.log(`${number} is odd`)
}
let name = prompt("Enter a name")
let age = prompt("Enter an age ")
if(age >= 18){
    alert(`Hi ${name} you ${age} you can signin to tiktok.`)
    console.log(`Hi ${name} you ${age} you can signin to tiktok.`)

} else{
    alert(`Hi ${name} if you are ${age} you cannot sign into tiktok `)
    console.log(`${age} if you are ${age} you cannot sign into tiktok `)

}
