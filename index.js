import inquirer from 'inquirer';
const systemNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess between 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess,", systemNumber, 'System');
if (userGuess === systemNumber) {
    console.log("Correct answer");
}
else {
    console.log("Please try again !");
}