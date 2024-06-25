import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}

const systemNumber = Math.floor(Math.random() * 10);


const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess between 1 to 10: "
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess,", systemNumber, 'System')
if(userGuess === systemNumber){
    console.log("Correct answer!")
} else {
    console.log("Please try again !")
}