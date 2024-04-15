#! /usr/bin/env node.
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.italic.magentaBright("*********** Welcome To Currency Conversion *********\n"));

let currencyConversion: any = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1

    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54
    }
};
const answer: {
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount: number

} = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "Enter from currency ?",
            choices: ["USD", "GBP", "PKR"]
        },
        {
            name: "to",
            type: "list",
            message: "Enter to currency ?",
            choices: ["USD", "GBP", "PKR"],

        },
        {
            name: "amount",
            type: "number",
            message: "Enter your Amount?",
            transformer: (input) => {
                return chalk.italic.redBright(input); // Use for changing the color of the user input.
            }
        }
    ]
)
const { from, to, amount } = answer;

if (from && to && amount) {
    let result = Math.floor(currencyConversion[from][to] * amount);
    console.log(chalk.italic.yellow("your conversion from"), " " + (chalk.bgBlue(from)), (chalk.italic.yellow("to")), " " + (chalk.bgBlue(to)), (chalk.italic.yellow("is")), " = " + (chalk.green(result)));

} else {
    console.log("Invalid Currency");

}