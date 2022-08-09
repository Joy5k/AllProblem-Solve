// ==================================================
//                               No.1
// Harry’s mom gave him tk 1000 and asked him to buy some oranges and
// apples. Write a program to help Harry calculate how much money the
// shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
// apples is tk 700.
// ===================================================


function momeGive(taka) {
    const apple = 300;
    const orange = 400;
    const sum = apple + orange;
    const returnTaka = taka - sum;
    return returnTaka;
}
const addValue = momeGive(1000);
console.log('I have ', addValue, 'Taka yet')
    // =========================================
    // Problem-No-2
    //  Write a program to calculate the average marks of Mathematics,
    // Biology, Chemistry, Physics, and Bangla of a student.

// ==========================================

function allMarks() {
    const math = 89;
    const bangla = 80;
    const chemistry = 67;
    const biology = 98;
    const english = 97;
    const avg = (math + bangla + chemistry + biology + english) / 5;
    return avg;
}

   const setValue= allMarks();
console.log(setValue);

 /**
  *======================Problem 3 Solve============== 
  *adding two strin within one line
  * John’s teacher gave him two variables. Each variable contains a string.
John’s teacher asked him to combine these two strings(‘I am going to
be’ and ‘an awesome web developer’) and print them in one line. Help
John write the program
*/
const firstStr = 'I am goin to be';
var secondStr = 'an awesome webdeveloper';
const sumStr = firstStr.concat(' ',secondStr);
console.log(sumStr);
/**=======================problem solve 4====================
 * Sarah’s mother is teaching her mathematics. She gave Sarah the number
119 and asked her what the remainder would be if she divided the number
by 5. Help Sarah write the program
 */

const sharaMomeGiveNumber = 10;
const remainder = sharaMomeGiveNumber % 5;
console.log(remainder);
/**=======================problem solve 5================
 * নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে । দেখতো বের করতে পারো কিনা?
 * 
 *এ খানে দেওয়া আছে ভুলটা নিচে ।মনে রেখ JavaScript কিন্ত case sensetive!!!!!! 

 Var price = 33
var name - Shabana
var boxName = ‘Cocola;
var 88_price = 34;
var enum = -1;
var _$box’78 = ‘Monika’;
var home-address = “kochu khet”;
 */

 var price = 33;
 var name = Shabana
 var boxName = 'Cocola';
 var taka_price = 34;
 var enumes = -1;
 var _$box78 = 'Monika';
var home_address = "kochu khet";
 /**===================problem sovlve============
  * 6) You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’
  * 
  * 
  */

const fruits = ['apple','Banana','orange'];
const element = fruits.indexOf('Banana');
console.log(element);
// replace banana with mango
fruits[1] = 'Mango';
// remove orange
fruits.pop();
// add watermelon
fruits.push('Watermelon');
console.log(fruits);
/**================problem 7 solve==================
 * grading system
 * 
 *  You and your friends Tom, Jane, Peter and John got their final exam
results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

 */

const Tom = 85;
const jane = 66;
const peter = 95;
const john = 56;
const Joy = 90;
if (Tom > 80) {
    console.log('A');
    
}
else if (Tom > 60 && Tom < 80) {
    console.log('B')
}
else if (Tom > 50 && Tom < 60) {
    console.log('c')
}
else if (Tom > 40 && Tom < 50) {
    console.log('D')
}
else{console.log('F')}





