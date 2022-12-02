#!/usr/bin/env node
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import inquirer from "inquirer";
const stop = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("...Welcome to My first npm Calculator App...");
    await stop();
    rainbowTitle.stop();
    console.log(chalk.yellow `_____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|
        
        (Calculator By Habib)`);
    console.log(chalk.blueBright `     EveryThing is fine \n`);
}
const validateNumber = (input) => {
    if (isNaN(input)) {
        return "please enter a number";
    }
    else {
        return true;
    }
};
async function question() {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "FirstNumber",
            message: "Enter your first number : ",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operator",
            message: chalk.green("Select operation you want to perform. \n"),
            choices: [
                "(+) Addition",
                "(-) Subtraction",
                "(*) Multiplication",
                "(/) Division",
                "(%) Modulus",
                "(^) Power",
            ],
        },
        {
            type: "input",
            name: "SecondNumber",
            message: "Enter your second number : ",
            validate: validateNumber,
        },
    ]);
    if (answer.operator == "(+) Addition") {
        console.log(`${answer.FirstNumber} + ${answer.SecondNumber} = ${Number(answer.FirstNumber) + Number(answer.SecondNumber)}`);
    }
    else if (answer.operator == "(-) Subtraction") {
        console.log(`${answer.FirstNumber} - ${answer.SecondNumber} = ${answer.FirstNumber - answer.SecondNumber}`);
    }
    else if (answer.operator == "(*) Multiplication") {
        console.log(`${answer.FirstNumber} * ${answer.SecondNumber} = ${Number(answer.FirstNumber) * Number(answer.SecondNumber)}`);
    }
    else if (answer.operator == "(/) Division") {
        console.log(`${answer.FirstNumber} / ${answer.SecondNumber} = ${answer.FirstNumber / answer.SecondNumber}`);
    }
    else if (answer.operator == "(%) Modulus") {
        console.log(`${answer.FirstNumber} % ${answer.SecondNumber} = ${answer.FirstNumber % answer.SecondNumber}`);
    }
    else if (answer.operator == "(^) Power") {
        console.log(`${answer.FirstNumber} ^ ${answer.SecondNumber} = ${answer.FirstNumber ** answer.SecondNumber}`);
    }
}
async function startAgain() {
    do {
        await question();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: " Do you want to restart? Press Yes or No",
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "Yes" ||
        again.restart == "yes");
}
await welcome();
startAgain();
