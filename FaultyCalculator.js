function faultyCalculator() {
    let input1 = prompt("Enter the first number");
    let input2 = prompt("Enter the second number");
    let operator = prompt("Enter the operator");

    let faultyOperators = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**",
    };

    let errorCheck = Math.random() < 0.1;

    if (errorCheck && faultyOperators[operator]) {
        operator = faultyOperators[operator];
        console.log("Game Mode ON");
    }

    let result;
    switch (operator) {
        case "+":
            result = Number(input1) + Number(input2);
            break;
        case "-":
            result = Number(input1) - Number(input2);
            break;
        case "*":
            result = Number(input1) * Number(input2);
            break;
        case "/":
            result = Number(input1) / Number(input2);
            break;
        case "**":
            result = Number(input1) ** Number(input2);
            break;
        default:
            console.log("Invalid Operator");
            return;
    }

    console.log(`Result: ${result}`);
}

faultyCalculator();