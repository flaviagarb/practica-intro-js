// 3.2
const input = 10;
const secondInput = 1;
const thirdInput = 11234;

const transform = (value) => {
    const transformStr = value.toString();

    let listStr = transformStr.split('');

    return listStr.join("-");

};

console.log(transform(input))
console.log(transform(secondInput))
console.log(transform(thirdInput))
