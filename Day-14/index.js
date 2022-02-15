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






