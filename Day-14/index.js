// 1. sum of positive and negative
// input : sebuah array of number


const sumPositiveAndNegative = (arr = []) => {
    let positive = 0
    let negative = 0
    
    arr.forEach((val) => {
        if (val > 0) {
            positive += val
        } else if (val < 0) {
            negative += val
        }
    })

    return [positive, negative]

}

console.log(sumPositiveAndNegative([1, 3, -4, 2, -13, -7]))


// --------------------------------------------------------
// 2. Square all

const squareAll = (arr = []) => {
    // let resultArr = []
//     arr.forEach((val) => {
//         resultArr.push(val ** 2)
//     })

let resultArr = arr.map((val) => {
    return val * val
})
    return resultArr
}


console.log(squareAll([1, 2, 3, 4, 5, 6]))

// ---------------------------------------------------------
// 3. Plus Minus


const plusMinus = (arr = []) => {
    let result = 0
    let operator = "plus"

    arr.forEach((val) => {
        if (operator == "plus") {
            result += val
            operator = "minus"
        } else if (operator == "minus") {
            result -= val
            operator = "plus"
        }
    })

    return result
}

console.log(plusMinus([1, 2, 3, 4, 5, 9]))

// -----------------------------------------------------------
// 4. Remove Vowels

const removeVowel = (string) => {
    let alphabet = string.split("")
    let result = []

    for (let i = 0; i < alphabet.length; i++) {
        if (!(alphabet[i] == "a" || alphabet[i] == "i" || alphabet[i] == "u" || alphabet[i] == "e" || alphabet[i] == 0)) {
            result.push(alphabet[i])
        } 

    }

    result = result.join("")
    return result
}

console.log(removeVowel("javascript"))





// -----------------------------------------------------------
// 5. Alphabet Value

const alphabetValue = (idx) => {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    let string = idx.split("")
    let number = 0

    for (let i = 0; i < string.length; i++) {
        number += alphabetArr.indexOf(idx[i]) + 1
    }

    return number

}

console.log(alphabetValue("abc"))
console.log(alphabetValue("steve"))

// ------------------------------------------------------------
// 6. Odd Alphabet Value

const oddAlphabetValue = (idx) => {
    const oddAlphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    let string = idx.split("")
    let number = 0

    for (let i = 0; i < string.length; i++) {
        if (!((oddAlphabetArr.indexOf(idx[i]) + 1) % 2 == 0))
        
        number += oddAlphabetArr.indexOf(idx[i]) + 1
    }

    return number

}

console.log(oddAlphabetValue("abc"))
console.log(oddAlphabetValue("steve"))







