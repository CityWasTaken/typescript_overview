function getUserInput() {
    const userName = String(prompt('Please type your name'));
    let age: number = 0;

    const userData = {
        userName: userName,
        age: age
    };

    return userData;
}