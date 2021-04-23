// n -> cho số phần ,
// 
let input;
function findOppositeNumber(n, inputNumber) {
    let result;
    input = inputNumber;
    let soPhan = n;
    let donVi = 1;
    let half = n / 2;
    console.log("half", half);
    let tempResult = inputNumber + half;
    console.log("temp result ", tempResult);
    if (inputNumber >= half) {
        let temp;
        temp = tempResult.toString().charAt(1);
        console.log("correct temp ", temp);
        result = temp;

    }
    else {
        result = tempResult;
    }
    return result;
}

console.log("oposite of ", input, findOppositeNumber(10, 6));