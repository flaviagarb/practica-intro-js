// 3.3 

const reverseWord = (word) => {
    const wordLen = word.length;
    const reversedWord = word.split("").reverse().join("");
    return `${wordLen} ${reversedWord}`;
};

const input1 = 'string'
console.log(reverseWord(input1))

const input2 = 'variable'
console.log(reverseWord(input2))

const input3 = 'pointer'
console.log(reverseWord(input3))
