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
  *======================Problem 2 Solve============== 
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
