const input = document.querySelector('.text input');
const buttons = document.querySelectorAll('button');

let current = '';
let operator = '';
let operand = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;

        if (!isNaN(val) || val === '.') {
            // Number or decimal
            current += val;
            input.value = current;
        } else if (val === '+' || val === '-' || val === '*' || val === '/') {
            if (current === '' && val === '-') {
                // Allow negative numbers
                current = '-';
                input.value = current;
                return;
            }
            if (current !== '') {
                operand = current;
                operator = val;
                current = '';
            }
        } else if (val === '=') {
            if (operand !== '' && operator !== '' && current !== '') {
                let result;
                const num1 = parseFloat(operand);
                const num2 = parseFloat(current);
                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
                }
                input.value = result;
                current = result.toString();
                operator = '';
                operand = '';
            }
        }else if (val === '⌫' || val === 'Back'){
            current = current.slice(0,-1);
            input.value = current;
        }
    });
});