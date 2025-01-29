// 3.3 

const reverseWord = (word) => {
    let wordLen = word.length;
    let wordLenStr = wordLen.toString();
    
    const wordList = word.split("");
    const reversedWordList = wordList.reverse();
    const reversedWord = reversedWordList.join("");
    
    return wordLenStr + " " + reversedWord;
};

const input1 = 'string'
console.log(reverseWord(input1))

const input2 = 'variable'
console.log(reverseWord(input2))

const input3 = 'pointer'
console.log(reverseWord(input3))
