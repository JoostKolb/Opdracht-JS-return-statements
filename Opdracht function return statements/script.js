// Checking if a number is big
const checkNumber = function (number) {

    const result = number;

    if (number > 100) {
        // console.log("Bigger than 100");
        return true;
    } else {
        // console.log("less than or equal to 100");
        return false;
    }
}
// console.log(checkNumber(101));

// Bouncer at a club
const BrendaChecklist = function (maxNumber, currentNumber, age) {
    if (currentNumber < maxNumber && age >= 18) {
        console.log("come in");
        return;
    } else if (currentNumber >= maxNumber && age >= 18) {
        console.log("It's too busy right now, come back later");
        return;
    } else {
        console.log("This is a club for adults");
        return;
    }
}

// BrendaChecklist(500, 100, 19);

// const numbersList = [1, 2, 3, 4, 5];
// let totalSum = 0;
// for (let i = 0; i < numbersList.length; i++) {
//     totalSum += numbersList[i];
// }

// let numbersTotal = numbersList.length;

// let averageAmt = totalSum / numbersTotal;
// console.log(averageAmt);

const calcAvg = function (numbers) {
    const numbersList = numbers;
    let totalSum = 0;
    let numbersTotal = numbersList.length;
    for (let i = 0; i < numbersTotal; i++) {
        totalSum += numbersList[i];
    }

    let averageAmt = totalSum / numbersTotal;
    return averageAmt;
}

const result = calcAvg([2, 2, 3, 4, 5]);
// const result = calcAvg([15, 62, 68, 90, 112]);
console.log(Math.round(result));