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
