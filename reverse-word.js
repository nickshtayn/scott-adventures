// Pseudocode

// empty word string
// empty words array
// empty reversed string

// loop that adds each index of function string to the empty word string until hitting space
// takes word and adds it into empty words array
// continues this loop for each word in the function string

// adds word in words array into reversed string in reverse order
// return new reversed string

const reverseWordOrder = (string) => {
    let currentWord = '';
    let reversedString = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            currentWord += string[i];
            if (string[i + 1] === ' ' || i + 1 === string.length) {
                console.log(currentWord += reversedString);
                currentWord = '';
            }
        }
    }
}
console.log(reverseWordOrder('hello world'))
