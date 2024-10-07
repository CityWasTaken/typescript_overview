"use strict";
let userInfo = 'City';
let num = 10;
let isCool = true;
let fruits = ['orange', 'apple', 'grape'];
let strictArray = ['JD', 44];
function add(a, b) {
    return a + b;
}
const city = {
    name: "City",
    age: 27
};
const cityDetails = {
    phone: '777-777-7777',
    address: '123 code str',
    hobbies: ['gaming', ' rapping']
};
function printUserInfo(userObj, detailsObj) {
    console.log(`${userObj.name} is ${userObj.age} years old. They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}`);
    if (detailsObj.hobbies) {
        console.log(`${userObj.name} likes ${detailsObj.hobbies[1]}`);
    }
}
printUserInfo(city, cityDetails);
// if (typeof userInfo === 'string') {
//     console.log(userInfo.toLowerCase());   
// }
// if (typeof userInfo === 'number') {
//     console.log(Math.round(userInfo));
// }
// if (typeof userName === 'string') {
// }
