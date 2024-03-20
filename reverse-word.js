const reverseWordOrder = (string) => {
    return string.split(' ').reverse().join(' ')
}

// Unit test

console.log(reverseWordOrder("hello world") === "world hello") // returns true

console.log(reverseWordOrder("hello") === "hello") // returns trues