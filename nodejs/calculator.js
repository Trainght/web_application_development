import inquries from 'inquirer';

function add(num1, num2) {
    let result = parseFloat(num1) + parseFloat(num2);
    return result;
}

function sub(num1, num2) {
    let result = parseFloat(num1) - parseFloat(num2);
    return result;
}

const args = process.argv.slice(2);
if (isNaN(args[0]) || isNaN(args[1])) {
    console.log('Please enter two numbers');
    process.exit(1);
}
if (args.length === 2) {
    inquries.prompt([
        {
            type: 'input',
            name: 'operation',
            message: 'add | subtract :',
        }
    ]).then(answers => {
        if (answers.operation === 'add') {
            console.log(`${args[0]} + ${args[1]} = ${add(args[0], args[1])}`);
        } else if (answers.operation === 'subtract'){
            console.log(`${args[0]} - ${args[1]} = ${sub(args[0], args[1])}`);
        } else {
            console.log('Unknown operator');
        }
    });
}