import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcome to 'Code with Sana' - Currency Conversion\n"));
// Currencies and their Rates
let exchangerate = {
    "USD": 1,
    "EURO": 0.9,
    "AUD": 1.3,
    "CAD": 1.4,
    "JYP": 280,
    "PAK": 200,
};
// Select currencies to use from
let useranswer = await inquirer.prompt([
    {
        name: "fromcurrency",
        type: "list",
        message: "select thecurrency to convert from",
        choices: ["USD", "EURO", "AUD", "CAD", "JYP", "PAK"]
    },
    {
        name: "tocurrency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EURO", "AUD", "CAD", "JYP", "PAK"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert",
    }
]);
// Perform the currency conversion by using the formula
let fromamount = exchangerate[useranswer.fromcurrency];
let toamount = exchangerate[useranswer.tocurrency];
let amount = useranswer.amount;
// Formula for Conversion
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
// To display the converted amount
console.log(`Converted amount ${convertedamount.toFixed(2)}`);
