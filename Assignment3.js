//Exercise 1

function compareNumbers(firstNumber, secondNumber){
    if (firstNumber < secondNumber) {
        return true
    }else if(firstNumber > secondNumber){
        return false
    }else{
        return -1
    }
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));
console.log("==================================");

// Exercise 2

// function reverseString(text){
//     let arrayText = text.split("")
//     let reverseText = arrayText.reverse()
//     let stringText = reverseText.join("")
//     return stringText
// }

function reverseString2(text){
    let arrayText = text.split("")
    let tampString = []
    for (let i = arrayText.length; i >= 0; i--) {
        tampString.push(arrayText[i])
    }
    let stringText = tampString.join("")
    return stringText
}

console.log(reverseString2("Hello World and Coders"));
console.log(reverseString2("John Doe"));
console.log(reverseString2("I am a bookworm"));
console.log(reverseString2("Coding is my hobby"));
console.log(reverseString2("Super"));
console.log("==================================");

//Exercise 3

// function urutHuruf(text){
//     let arrayText = text.split("")
//     let sortText = arrayText.sort()
//     let stringText = sortText.join("")
//     return stringText
// }

function urutHuruf2(text){
    let arrayText = text.split("")
    let smaller
    for (let i = 0; i < arrayText.length; i++) {
        for (let j = i+1; j < arrayText.length; j++) {
            if (arrayText[i] > arrayText[j]) {
                smaller = arrayText[j]
                arrayText[j] = arrayText[i]
                arrayText[i] = smaller
            }
        }
    }
    return arrayText.join("")
}

console.log(urutHuruf2("halo"));
console.log(urutHuruf2("qwerty"));
console.log(urutHuruf2("qwertyuiopasdfghjklzxcvbnm"));
console.log("==================================");

// Exercise 4

function isArithmeticProgression(numbers){
    let isArithmetic = true
    let diff = numbers[1] - numbers[0]
    for (let i = 1; i < numbers.length-1; i++) {
        if (numbers[i+1] - numbers[i] !== diff) {
            isArithmetic = false
        }else{
            continue
        }
    }
    return isArithmetic
}

console.log(isArithmeticProgression([1,2,3,4,5,6]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7,9]));
console.log("==================================");

// Exercise 5

function threeStepsAB(text){
    let pattern1 = /a.{3}b/gi
    let pattern2 = /b.{3}a/gi
    let cekThreeStepsAB = pattern1.test(text) || pattern2.test(text)
    return cekThreeStepsAB
}

console.log(threeStepsAB("lane borrowed"));
console.log(threeStepsAB("i am sick"));
console.log(threeStepsAB("you are boring"));
console.log(threeStepsAB("barbarian"));
console.log(threeStepsAB("bacon and meat"));
console.log("==================================");

// Exercise 6

function gcd(firstNumber, secondNumber){
    const smallNumber = (firstNumber, secondNumber) => firstNumber>secondNumber ? secondNumber : firstNumber
    let smaller = smallNumber(firstNumber,secondNumber)
    let FPB = 1
    for (let i = smaller; i > 0; i--) {
        if (firstNumber%i === 0 && secondNumber%i === 0) {
            if (i > FPB) {
                FPB = i
            }
        }
    }
    return FPB
}

console.log(gcd(12,16));
console.log(gcd(50,40));
console.log(gcd(22,99));
console.log(gcd(24,36));
console.log(gcd(17,23));
console.log("==================================");

// Exercise 7

function isPrime(number){
    let isPrimeNumber = true
    if (number !== 1) {
        for (let i = 2; i < number; i++) {
            if(number%i === 0){
                isPrimeNumber = false
            }
        }
    }
    return isPrimeNumber
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));
console.log("==================================");

// Exercise 8

function listPrima(angkaPertama, angkaKedua){
    let prima = []
    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (isPrime(i)) {
            prima.push(i)
        }
    }
    return prima
}

console.log(listPrima(1,5));
console.log(listPrima(5,10));
console.log(listPrima(10,20));
console.log("==================================");









