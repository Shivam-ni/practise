
    function calculate(operator) {
        const num1 = parseFloat(document.getElementById('operand1').value);
        const num2 = parseFloat(document.getElementById('operand2').value);
        const output = document.getElementById('output');

        if (isNaN(num1) || isNaN(num2)) {
            output.textContent = 'Please enter valid numbers.';
            return;
        }

        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    output.textContent = "Can't divide by 0";
                    return;
                }
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            default:
                output.textContent = 'Invalid operation';
                return;
        }

        output.textContent = `Result: ${result}`;
    }

