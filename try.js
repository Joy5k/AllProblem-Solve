// // fahrenheit to celsius
// function temperature(number) {
//     let celcius = number / 33.8;
//     let digitFixed = celcius.toFixed(2);
//     let convertFloat=parseFloat(digitFixed);
//     console.log(convertFloat,'degree celcius');
//     // return convertTempTocelcius;
// }
// temperature(60);
// // celsius to fahrenheit
// function temp(number) {
//     let
// }
// let index = temp(33);
// let setValue = index;
//  to days class:
// let userName = 'Mehedi hasan';
// let userInput = 'Mehedi Hasan';
// if (userName.toLowerCase() == userInput.toUpperCase()) {
//     console.log('valide data',userInput);
// }
// else { 'invalid user informaton' }















 function bestFriends(friends) {
let stringLength = friends[0].length;
var bestFriend = friends[0];
for (let i = 0; i < friends.length; i++) {
let nameLength = friends[i].length;
if (nameLength > stringLength) {
bestFriend = friends[i];
stringLength = nameLength;
}
}
return bestFriend;
}
const myFriends = [
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
const bestFriendIs = bestFriends(myFriends);
// console.log(bestFriendIs);



// function bestFriend(names) {
// let largeNameLength=names[0].length;
// let largeName = [0];
    
//     let largeNameLenght = largeName.length;
//     for (let i = 1; i < names.length; i++){
//         let nameIndex =names[i];
//         let nameLength = nameIndex.length;
//         if (largeNameLenght < nameLength) {
//             largeName = nameIndex;
//         }

//     }
//     return largeName;
// }
// const friends = ['joy', 'mehedi    ', 'hasan'];
// console.log(bestFriend(friends));
















// const arr = ['20','120','111','215','54','78', '120'];
// let intArray = arr.map(Number); // convert into number
// // console.log(intArray)
//  let intArrays = [...new Set(intArray)]; // Remove duplicate numbers
// const secondLargestNumber = intArray.sort((a,b) => {
//    return b - a;
// })[1];
// // console.log(secondLargestNumber) // 120

const arr = [14, 58, 20, 77, 66, 2, 42, 67, 42, 4]
const min = Math.min(...arr)
console.log(min)