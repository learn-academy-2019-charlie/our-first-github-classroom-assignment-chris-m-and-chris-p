// // Question 1
// var  item = 102;
//
// if (item <= 100) {
//     console.log("item is less than 100")
// } else {
//     console.log("item is more than 100")
// }
//
// // Question 2
// var hungry = true;
//
// if (hungry === true) {
//     console.log("Eat food");
// } else {
//     console.log("Keep coding");
// }
//
// //Question 3
// var trafficLight = "green";
//
// if (trafficLight === "green") {
//     console.log("go");
// } else if (trafficLight === "yellow") {
//     console.log("slow down")
// } else {
//     console.log("stop")
// }
//
// // Question 4
// var numOne = 2;
// var numTwo = 6;
//
// if (numOne > numTwo) {
//     console.log(numOne)
// } else if (numTwo > numOne) {
//     console.log(numTwo);
// } else if (numOne === numTwo) {
//     console.log("Equal")
// }
//
// // Question 5
//
// var numThree = "hi";
//
// if (numThree % 2 === 0){
//     console.log("is even")
// } else if(numThree % 2 !== 0){
//     console.log("is odd")
// } else {
//     console.log("is zero")
// }
//
// // Stretch 1
// var gradePercentage = 49;
//
// if (gradePercentage === 100) {
//     console.log("Perfect score");
// } else if (gradePercentage >= 90) {
//     console.log("A");
// } else if (gradePercentage >= 80) {
//     console.log("B");
// } else if (gradePercentage >= 70) {
//     console.log("C");
// } else if (gradePercentage > 0) {
//     console.log("D");
// } else if (gradePercentage === 0) {
//     console.log("No grade");
// }
//
// // Stretch 2
//
// var type = true;
//
// console.log(typeof type);
//
// if (typeof type === "boolean") {
//     console.log("Boolean");
// } else if (typeof type === "string") {
//     console.log("String");
// }

// typeof type ? console.log(typeof type) : console.log(typeof type);

// var groceryList2 = ["chips", "dip", "cookies"]
// console.log(groceryList2)
// groceryList2.push("soda");
// console.log(groceryList2)
//
// var numbers2 = [2, 4, 6, 8, 10]
// console.log(numbers2)
// numbers2.unshift(0);
// console.log(numbers2)
//
// var groceryList1 = ["apples", "carrots", "oatmeal"]
// var groceryListNew = groceryList1.concat("granola");
// console.log(groceryListNew);
// console.log(groceryList1);
//

//
// var numbers1 = [1, 2, 3, 4, 5];
// var numbers3 = numbers1.unshift(0);
// console.log(numbers1);

//
// var numbers3 = [2, 13, 6, 8, 4, 2]
// console.log(numbers3.lastIndexOf(2));
//
// var chars = ["y", "a", "r", "r", "a"]
// console.log(chars.join(""));
// var charsReversed = chars.reverse();
// console.log(charsReversed);
// console.log(charsReversed.join("-"));
// console.log(charsReversed.join(""));
//
// var sibNames = ["John", "Carl"];
// var parNames = ["Johannes", "Barb", "Arjen", "Jan"];
//
// console.log(sibNames.sort());
// console.log(parNames.sort().reverse());
//
// var namesCombined = sibNames.concat(parNames);
//
// console.log(namesCombined.sort().reverse());







// var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here."];
//
// function randomNum() {
//     return Math.floor(Math.random() * 6);
// }
//
// function playsGame() {
//     var question = document.getElementById("question").value;
//     document.getElementById("answer").innerHTML = answers[randomNum()];
// }



// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.


for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
