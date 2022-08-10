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
// const Tom = 85;
// const jane = 66;
// const peter = 95;
// const john = 56;
// const Joy = 90;

function garde(marks) {
  if (marks > 80) {
      console.log('A')
  }
  else if (marks > 60 && marks < 80) {
      console.log('B')
  }
  else if (marks > 50 && marks < 60) {
      console.log('c')
  }
  else if (marks > 40 && marks < 50) {
      console.log('D')
  }
  else{console.log('F')}
  
}
const inputMarks = garde(86);
// =================problem 8 solve=============
/**
 * ) You are given three numbers 13, 79, and 45. Write a program that will
print the largest number using if-else.
 */
const num1 = 13;
const num2 = 79;
const num3 = 49;
if (num1 > num2 && num1 > num3) {
    console.log(num1, 'is largest number');
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2, 'is largest number ');
}
else {
    console.log(num3, 'is largest number');
}
// =================problem 9 solve ======করার কথা ছিল if-else ব্যতিত সময় নাথাকায় করতে পারিনি====google থেকে যেনে নেওয়া লাগত===
// You are given a triangle with the sides 9, 8, 9. Write a program to check
// whether a triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal
// const side1 = 78;
// const side2 = 78;
// const side3 = 76;
//     if (side1 == side2 || side2 == side3 || side3 == side1){
//         console.log('yes this is isolaces')
// }

// ================problem 10 solve=================
// 10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধুআলি য়া, ডালি য়া,
// সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
// জান ো. আলি য়া 95 পে য়ে ছে , ডালি য়া 66 পে য়ে ছে , সালি য়া 80 পে য়ে ছে , মালি য়া পে য়ে ছে 59,
// লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
// দি তে পারবে ?
// ১) যারা ৫০ এর নি চে পে য়ে ছে , তাদে র grade F.
// ২) যারা ৫০ বা তার উপরে পে য়ে ছে , অথবা ৬০ এর নি চে পে য়ে ছে , তাদে র grade D.
// ৩) যারা ৬০ বা তার উপরে পে য়ে ছে , অথবা ৭০ এর নি চে পে য়ে ছে , তাদে র grade C.
// ৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
// ৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
// ৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.

// 
function grade(marks) {
    if (marks >= 80) {
        console.log('you got A+')
    }
    else if (marks >= 70 && marks < 80) {
        console.log('you got A')
    }
    else if (marks >= 60 && marks < 70) {
        console.log('you got A-')
    }
    else if (marks >= 50 && marks < 60) {
        console.log('you got B')
    }
    else if (marks >= 40 && marks < 50) {
        console.log('you got C');
    }
    else if (marks >= 33 && marks < 40)
        console.log('you got D')
    else{console.log('you feild')}
    
}
const Marks = grade(45);
console.log(Marks);
// ================problem solve 11=============
// 11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক
// সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে
// পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন
// হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা
// signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
// সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।
// 

function crossOrWait(signal) {
    if (signal === 'red') {
        console.log('Donot try to crosse the road')
    }
    else if (signal === 'yellow') {
        console.log('wait a for green signal')
    }
    else if (signal === 'green'){
        console.log('yes it is high time for your')
        
    }
    else { console.log('please input valide data')}
}
let inputData = crossOrWait('red');
// ========================problem 16=================
// 6) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
// কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
// ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।


function taka(price) {
    if (price >= 80000) {
        console.log('Buy a Mac')
    }
    else if (price >= 60000 && price < 80000) {
        console.log('Buy a gaming Laptop')
    }
    else if (price >= 40000 && price < 60000) {
        console.log('Buy lenevo Computer')
    }
    else if (price >= 20000 && price < 40000) {
        console.log('Buy secondhand laptop')
    }
    else{console.log('tomar kono kisu kener dorkar nei ')}

}
const inputTaka = taka(60000);

// ===============================porblem 17===============
// 17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও।

let string = ' আজকে  আমার মন ভালোনেই';
for (let i = 1; i <= 39; i++){
    const index = i;
    console.log(index)
    console.log(string);
} 
// =====================problem 19 solve==============
// 9) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও

for (i = 58; i <= 98; i++){
    const index = i;
    console.log(index);
}



// ====================problem 20 solve================
// 0) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে
// দে খাও

const number = [];
for (let i = 412; i <=456; i++) {
    const index = i;
    if(index%2==0){
        const secondStr = number.push(index); 
    }   
}
console.log(number);


// =================problem 21 solve=========
// 1) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দে খাও

const OddNumber = [];
for (let i = 581; i <= 623; i += 1){
    const index = i;
    if (index % 2 == 1) {
        const setValue = OddNumber.push(index);
    }
}
console.log(OddNumber);
// =======================problem 22 solve====

// 2) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
// for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।

const learned = ['while', 'array', 'object', 'for', 'if-else', 'includes',];
for (let i = 0; i < learned.length; i++){
    const index = i;
    // console.log(index);
    let learne = learned[index];
}
console.log(learned);
// ==========================proble 24===========
// 4) একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
// জি নি স ক োড করে দে খাও


for (let i = 30; i <= 86; i++){
    const index = i;
    if (index == 45) {
        break
    }
    console.log(index);
}



// ============================problem 25 solve=============
// 5) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
// টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
// আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না।
const books = [6,3,67,56, 64, 14, 23, 12, 53, 13, 11,40];
for (let i = 0; i < books.length; i++){
    const number =books[i];

    if (number> 20){
        continue;
    }
    console.log(number);
    
}
// ==================================== module  problem solve 1 


function feetToInch(feet) {
    let converte = feet * 12;
    console.log(converte,'inch')
}
const inputValue = feetToInch(10);

// ====module problem solve=====module22.5===

function centimeterToMeter(centimeter) {
    const converte = centimeter / 100;
    console.log(converte);
}
const inputDatas = centimeterToMeter(100);

// ===========module problem solve==== 3  =====video 22.5==


function paperRequirements(firstbook, secondbook, thirdbook) {
    const firstbookPage = 100;
    const secondbookPage = 200;
    const thirdbookPage = 300;

    const totalPageOfFirstBook = firstbookPage * firstbook;
    console.log(totalPageOfFirstBook)
    const totalPageOfSecondBook = secondbookPage * secondbook;
    const totalPageOfthirdBook = thirdbookPage * thirdbook;

    const totalPage = totalPageOfFirstBook + totalPageOfSecondBook + totalPageOfthirdBook;
    return totalPage;

}
const inputbookvalue = paperRequirements(1, 6, 2);
console.log(inputbookvalue);
// ==============module problem-solve=========4=======
function bestFriend(names) {
    let largeNameLenght = names[0].length;
    let largeName = [0];
    for (let i = 0; i < names.length; i++){
        let element = names[0].length;
        if (largeNameLenght < element) {
            largeName = element;
        }
    }
    return bestFriend;
}
const allfriends= [
    "Peter",
    "John",
    "Jane",
    "Parker",
    "Muller",
    "Jonanthan Swift",
    "Harry potter",
    "Jacks Darrida",
    "Jane Jones  ",
    ];
const FriendIs = bestFriends(allfriends);
console.log(FriendIs)
// =============================problem 31 solve===============
// 1) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে
// দেখাবে ।

function multiplication(number) {
    let mutlipTable = number * 13;
    return mutlipTable;
}
const multiplications = multiplication(1);
console.log(multiplications);
// ==================module 22.5 problem 5 sovlve=============
// ==========about getting positive number===============

function positiveNumber(number) {
    let num = [];
    for (let i = 0; i <number.length; i++){
        const element = number[i];
        if (element > 0) {
            num.push(element);     
        }
        else { break; } 
    }
    return num;
}
const all = [5, 65, 4, 5, 6, 98, -7, 7, 10];
const isPositvie = positiveNumber(all);
console.log(isPositvie);
// ============================= PROBLEM 34 SOLVE===============
// ) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার
// square করে সে ই square কে রি টার্ন করবে ।
// অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে ।


function num(number) {
    let sqrThevalue = number * number;
    return sqrThevalue;
}
const sqrIt = num(5);
console.log(sqrIt);

