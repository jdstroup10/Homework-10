'use strict';
var inquirer = require('inquirer');
const axios = require("axios");
var fs = require('fs');


const roleprompt =  {
    type: "list",
    name: "role",
    message: "What is the role of your first team member?",
    choices: ["Manager", "Engineer", "Intern"]
  };

//Prompt to add a new member
const newMember = {
    type: "list",
    name: "continue",
    message: 'Would you like to add a new member?',
    choices: ["Yes", "No, end list"]

}
//Questions for Manager role
const managerprompt = [{
    type: "input",
    name: "office",
    message: "What is their office number?",
},
{
    type: "input",
    name: "name",
    message: "What is their name?",
},
{
    type: "input",
    name: "email",
    message: "What is their email?",
},
{ 
    type: "input",
    name: "id",
    message: "What is their id number?",
}];

//Questions for Intern role
const internprompt = [{
    type: "input",
    name: "school",
    message: "What school do they go to?",
},
{
    type: "input",
    name: "name",
    message: "What is their name?",
},
{
    type: "input",
    name: "email",
    message: "What is their email?",
},
{ 
    type: "input",
    name: "id",
    message: "What is their id number?",
}];

//Questions for Engineer role
const engineerprompt = [{
    type: "input",
    name: "github",
    message: "What is their github username?",
},
{
    type: "input",
    name: "name",
    message: "What is their name?",
},
{
    type: "input",
    name: "email",
    message: "What is their email?",
},
{ 
    type: "input",
    name: "id",
    message: "What is their id number?",
}];


  function main() {
      nextfunction();
     

  }

  function nextfunction() {
      inquirer.prompt(roleprompt).then(answers => {
          if (answers.role === "Manager") {
              console.log("Success! Manager added.")
              managerQuestions();

          } else if (answers.role === "Intern") {
                console.log("Success! Intern added.")
                internQuestions();

          } else if (answers.role === "Engineer") {
                console.log("Success! Engineer added.")
                engineerQuestions();
          }
          //AddNewMember();
          //endQuestions();
      }
      )
  }
  //Manager Questions
  function managerQuestions() {
      inquirer.prompt(managerprompt).then(answers => {
        var filename = "main.html"
        var html = `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${answers.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${ answers.email }">${ answers.email }</a></li>
                <li class="list-group-item">Office number: ${ answers.office }</li>
            </ul>
        </div>
    </div>
    </html>
   
        `
        
      
        fs.appendFile(filename, html, function(err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("Your team member has been added successfully! Run the program again to add a new member");
      
        });
      
          

      })
  }

  //Intern Questions
  function internQuestions() {
    inquirer.prompt(internprompt).then(answers => {
      var filename = "main.html"
      var html = `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email }</a></li>
              <li class="list-group-item">School: ${answers.school }</li>
          </ul>
      </div>
  </div>
  </html>
 
      `
      
    
      fs.appendFile(filename, html, function(err) {
    
        if (err) {
          return console.log(err);
        }
    
        console.log("Your team member has been added successfully! Run the program again to add a new member");
    
      });
    
        

    })
}

//Engineer Questions
function engineerQuestions() {
    inquirer.prompt(engineerprompt).then(answers => {
      var filename = "main.html"
      var html = `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${answers.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${answers.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${ answers.email }">${ answers.email }</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank" rel="noopener noreferrer">${answers.github}</a></li>
              </ul>
      </div>
  </div>
  </html>
 
      `
      
    
      fs.appendFile(filename, html, function(err) {
    
        if (err) {
          return console.log(err);
        }
    
        console.log("Your team member has been added successfully! Run the program again to add a new member");
    
      });
    
        

    })
}

function AddNewMember() {
    inquirer.prompt(engineerprompt).then(answers => {
        console.log(answers.continue);
    })
}

  

  //code to end functions
  function endQuestions() {
      return console.log("end")
  }

  //function to write the file
  function generateFile() {
      console.log(answers.role)
  }

  main();