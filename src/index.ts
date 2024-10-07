let userInfo: string | number = 'City';
let num: number = 10;
let isCool: boolean = true;
let fruits: String[] = ['orange', 'apple', 'grape'];
let strictArray: [String, Number] = ['JD', 44];


function add(a: number, b: number): number {
    return a + b;
}

// console.log(add(5, 10));

type User = {
    name: string;
    age: number;
}

type Details = {
    phone: string;
    address: string;
    hobbies?: String[];
}

const city = {
    name: "City",
    age: 27
};

const cityDetails = {
    phone: '777-777-7777',
    address: '123 code str',
    hobbies: ['gaming', ' rapping']
}

function printUserInfo(userObj: User, detailsObj: Details) {
    console.log(`${userObj.name} is ${userObj.age} years old. They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}`)
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
