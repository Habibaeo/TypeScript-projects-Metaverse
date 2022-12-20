#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { type } from "os";
import { stringify } from "querystring";

const duration = ()=>{
    return new Promise((res)=>{
    setTimeout(res,1000)
});
};
async function start() {

let firstNote = chalkAnimation.rainbow(`
   #    ####### #     #       #     #    #     #####  #     # ### #     # #######
  # #      #    ##   ##       ##   ##   # #   #     # #     #  #  ##    # #
 #   #     #    # # # #       # # # #  #   #  #       #     #  #  # #   # #
#     #    #    #  #  # ##### #  #  # #     # #       #######  #  #  #  # #####
#######    #    #     #       #     # ####### #       #     #  #  #   # # #
#     #    #    #     #       #     # #     # #     # #     #  #  #    ## #
#     #    #    #     #       #     # #     #  #####  #     # ### #     # ####### \n\n`);

await duration();
firstNote.stop();

}

let balance = Math.floor(Math.random() * 1000000);

async function userSet() {
  await start();

  var login = await inquirer.prompt([
    {
      type: "input",
      name: "setUser",
      message: chalk.yellow("Set user name : "),
      hide: true,
    },
    {
      type: "password",
      name: "pin",
      message: chalk.yellowBright("Set your 4 digit PIN : "),
      mask: "*",
      validate: (input: number) => {
        let stringNumber = JSON.stringify(input);

        if (
          isNaN(input) ||
          stringNumber.length - 2 > 4 ||
          stringNumber.length - 2 < 4
        ) {
          return chalk.red("Pin must be a number and four digits long");
        } else {
          return true;
        }
      },
    }
  ]);
  return login.setUser
}
async function options() {

  let operation = await inquirer.prompt([
    {
      type: "list",
      name: "actions",
      message: chalk.yellow("Choose the desired operation"),
      choices: ["Check Balance", "Withdraw", "Transfer"],
    },
  ]);
  if (operation.actions == "Check Balance") {
    console.log(chalk.cyan(`  Your available Balance is : ${balance}$`));
  } else if (operation.actions == "Withdraw") {
    console.log(chalk.green(`Available Balance = $${balance}`));
    let withdraw = await inquirer.prompt([
      {
        type: "input",
        name: "withdrawl",
        message: chalk.cyan("Enter withdrawl amount : $"),
        validate: (inputNumber: number) => {
          if (isNaN(inputNumber) || inputNumber > balance) {
            return chalk.red("Not a Number or Greater than Available balance");
          } else {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "receipt",
        message: chalk.yellow("Do you want to print receipt"),
      },
    ]);

    if (withdraw.withdrawl <= balance && withdraw.receipt) {
      console.log(
        chalk.green(`        Withdrawl Amount : ${withdraw.withdrawl}$ 
        Remaining Balance : ${balance - withdraw.withdrawl}$
        Transaction Successful`)
           
      );
      balance = balance - withdraw.withdrawl;
    } else if (withdraw.withdrawl <= balance) {
      console.log(chalk.green("Transaction Successful"));
    }
  } else if (operation.actions == "Transfer") {
    console.log(chalk.green(`Available Balance = $${balance}`));
    let transfer = await inquirer.prompt([
      {
        type: "input",
        name: "account",
        message: chalk.cyan("Enter receiver's account number : "),
        validate: (inputNumber1: number) => {
          if (isNaN(inputNumber1)) {
            return chalk.red("Not a valid Account Number");
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "transferAmount",
        message: chalk.cyan("Enter Amount to Transfer : $"),
        validate: (inputNumber2: number) => {
          if (isNaN(inputNumber2) || inputNumber2 > balance) {
            return chalk.red("Not a Number or Greater than Available balance");
          } else {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "proceed",
        message: chalk.yellow("Do you want to proceed"),
      },
    ]);
    if (transfer.transferAmount <= balance && transfer.proceed) {
      let receiveReceipt = await inquirer.prompt({
        type: "confirm",
        name: "receipt",
        message: chalk.yellow("Do you want to print receipt"),
      });
      if (receiveReceipt.receipt) {
        console.log(
          chalk.green(`              Beneficiary Account : ${transfer.account}  
              Transfer Amount : ${transfer.transferAmount}$ 
              Remaining Balance : ${balance - transfer.transferAmount}$
              Transaction Successful`)
        );
        balance = balance - transfer.transferAmount;
      } else {
        console.log(chalk.green("Transaction successful"));
      }
    } else {
      console.log(chalk.red("    Transaction Aborted"));
    }
  }
}

async function repeat(){
   do {
   
    await options();
    var ask = await inquirer.prompt([
      {
        type: "confirm",
        name: "doagain",
        message: chalk.yellow("To perform another operation press Y/N"),
      },
    ]);
  } while (ask.doagain);
}
await userSet();
repeat();