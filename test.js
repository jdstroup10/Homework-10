var inquirer = require("inquirer");
const axios = require("axios");
var fs = require('fs');
const manager = require("./lib/Manager")
const engineer = require("./lib/Engineer")
const intern = require("./lib/intern")


inquirer.prompt( [{
    type: "list",
    name: "role",
    message: "What is the role of your first team member?",
    choices: ["Manager", "Engineer", "Intern"]
  }
  

])
.then(answers => {
if (answers.role === "Engineer") {
    inquirer.prompt([{
        type: "input",
    name: "name1",
    message: "What is their name?"
    }

])
} else {
    console.log("Not an engineer")
}
});
 




