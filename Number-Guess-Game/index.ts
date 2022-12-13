#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const duration = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcomeNote() {
  let welcome = chalkAnimation.rainbow(
    ` Welcome to Number Guessing game \n       ...Developed...`
  );

  await duration();
  welcome.stop();

  let myName = chalkAnimation.neon(`
    ########  ##    ##    ##     ##    ###    ########  #### ########
    ##     ##  ##  ##     ##     ##   ## ##   ##     ##  ##  ##     ##
    ##     ##   ####      ##     ##  ##   ##  ##     ##  ##  ##     ##
    ########     ##       ######### ##     ## ########   ##  ########
    ##     ##    ##       ##     ## ######### ##     ##  ##  ##     ##
    ##     ##    ##       ##     ## ##     ## ##     ##  ##  ##     ##
    ########     ##       ##     ## ##     ## ########  #### ########  `);

  await duration();
  myName.stop();
}




let validateNumber = (input: any) => {
  if (isNaN(input)) {
    return "Please enter a valid Number";
  } else {
    return true;
  }
};
let playerlife = 6;
async function gameStart() {
  await welcomeNote();
  var numberGenerated = Math.floor(Math.random() * 10 + 1);
    
  do {
      
    playerlife--;
    console.log(chalk.yellowBright(`Total Attempts left : ${playerlife}`));
    var start = await inquirer.prompt([
      {
        type: "input",
        name: "number",
        message: chalk.cyan("Guess and enter Number between 1-10"),
        validate: validateNumber,
      },
    ]);
    if (start.number == numberGenerated) {
      console.log(
        chalk.greenBright(`Hurray! you guessed the Number,\n   You Won`)
      );
    } else if (playerlife != 1 && start.number > numberGenerated) {
      console.log(chalk.red(`Enter a bit smaller number`));
    } else if (playerlife != 1 && start.number < numberGenerated) {
      console.log(chalk.red(`Enter a bit greater number`));
    } else {
      console.log(chalk.red("You could not guess the number. \n Game over"));
    }
  } while (playerlife > 1 && start.number != numberGenerated);
}

async function repeat() {
  do {
    playerlife = 6;
    await gameStart();
    var ask = await inquirer.prompt([
      {
        type: "confirm",
        name: "doagain",
        message: "To play again enter y/n",
      },
    ]);
  } while (ask.doagain);
}
repeat();
