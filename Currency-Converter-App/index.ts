#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function greeting() {
  let greet = chalkAnimation.rainbow(`
    ╔═╗┬ ┬┬─┐┬─┐┌─┐┌┐┌┌─┐┬ ┬    ╔═╗┌─┐┌┐┌┬  ┬┌─┐┬─┐┌┬┐┌─┐┬─┐
    ║  │ │├┬┘├┬┘├┤ ││││  └┬┘    ║  │ ││││└┐┌┘├┤ ├┬┘ │ ├┤ ├┬┘
    ╚═╝└─┘┴└─┴└─└─┘┘└┘└─┘ ┴     ╚═╝└─┘┘└┘ └┘ └─┘┴└─ ┴ └─┘┴└─
`);

  await sleep();
  greet.stop();
  console.log(
    chalk.cyan(`
    ╔╦╗┌─┐┬  ┬┌─┐┬  ┌─┐┌─┐  ┌┐ ┬ ┬  ╦ ╦┌─┐┌┐ ┬┌┐ 
     ║║├┤ └┐┌┘├┤ │  │ │├─┘  ├┴┐└┬┘  ╠═╣├─┤├┴┐│├┴┐
    ═╩╝└─┘ └┘ └─┘┴─┘└─┘┴    └─┘ ┴   ╩ ╩┴ ┴└─┘┴└─┘`)
  );
}

const validateNumber = (input: any) => {
  if (isNaN(input)) {
    return "Please enter a Valid number";
  } else {
    return true;
  }
};

async function convertCurrency() {
  let currency = await inquirer.prompt([
    {
      type: "list",
      name: "currency_convert",
      message: chalk.rgb(
        433,
        55,
        78
      )("Select the currency you want to convert"),
      choices: [
        "1) PKR - Pakistani Rupee",
        "2) USD - US Dollar",
        "3) GBP - Great Britain pound",
        "4) AUD - Australian Dollar",
        "5) CAD - Canadian Dollar",
        "6) JPY - Japanese Yen",
        "7) CHF - Swiss Frank",
        "8) EUR- Euro",
        "9) NZD - New Zealand Dollar",
      ],
    },
    {
      type: "list",
      name: "Target_Currency",
      message: chalk.rgb(43, 555, 78)("Select the target currency"),
      choices: [
        "1) PKR - Pakistani Rupee",
        "2) USD - US Dollar",
        "3) GBP - Great Britain pound",
        "4) AUD - Australian Dollar",
        "5) CAD - Canadian Dollar",
        "6) JPY - Japanese Yen",
        "7) CHF - Swiss Frank",
        "8) EUR- Euro",
        "9) NZD - New Zealand Dollar",
      ],
    },
    {
      type: "input",
      name: "Amount",
      message: chalk.rgb(33, 55, 478)("Enter your amount to convert"),
      validate: validateNumber,
    },
  ]);
  if (currency.currency_convert === "1) PKR - Pakistani Rupee") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 1).toFixed(1), "PKR");
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 0.0044).toFixed(2), "$");
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.0037).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 0.0066).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 0.006).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 0.58).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.0041).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.0042).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 0.0071).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "2) USD - US Dollar") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 227.23).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.84).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1.49).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 1.36).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 130.73).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.94).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.95).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.61).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "3) GBP - Great Britain pound") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 271.05).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 1.19).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1.78).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 1.63).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 155.94).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 1.12).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 1.13).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.92).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "4) AUD - Australian Dollar") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 155.55).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 0.69).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.57).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 0.93).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 89.71).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.64).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.65).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.08).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "5) CAD - Canadian Dollar") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 166.77).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 0.74).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.61).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1.07).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 96.22).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.68).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.69).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.16).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "6) JPY - Japanese Yen") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 1.73).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 0.0077).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.0064).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 0.011).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 0.01).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.0071).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.0072).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 0.012).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "7) CHF - Swiss Frank") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 242.57).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 1.08).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.89).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1.57).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 1.46).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 140.68).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 1.02).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.7).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "8) EUR- Euro") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 240.01).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 1.06).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.88).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 1.54).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 1.44).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 138.42).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.98).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 1).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1.68).toFixed(2));
        break;
    }
  } else if (currency.currency_convert === "9) NZD - New Zealand Dollar") {
    switch (currency.Target_Currency) {
      case "1) PKR - Pakistani Rupee":
        console.log((currency.Amount * 143.15).toFixed(2));
        break;
      case "2) USD - US Dollar":
        console.log((currency.Amount * 0.63).toFixed(2));
        break;
      case "3) GBP - Great Britain pound":
        console.log((currency.Amount * 0.53).toFixed(2));
        break;
      case "4) AUD - Australian Dollar":
        console.log((currency.Amount * 0.92).toFixed(2));
        break;
      case "5) CAD - Canadian Dollar":
        console.log((currency.Amount * 0.86).toFixed(2));
        break;
      case "6) JPY - Japanese Yen":
        console.log((currency.Amount * 82.59).toFixed(2));
        break;
      case "7) CHF - Swiss Frank":
        console.log((currency.Amount * 0.59).toFixed(2));
        break;
      case "8) EUR- Euro":
        console.log((currency.Amount * 0.6).toFixed(2));
        break;
      case "9) NZD - New Zealand Dollar":
        console.log((currency.Amount * 1).toFixed(2));
        break;
    }
  }
}
async function repeat() {
    await greeting();
    do {
    await convertCurrency();
    var doagain = await inquirer.prompt({
      type: "confirm",
      name: "repeat",
      message: "Do you want to perform another operation?",
    });
  } while (doagain.repeat);
}

repeat();
