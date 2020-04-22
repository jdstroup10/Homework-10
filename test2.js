var inquirer = require("inquirer");
const axios = require("axios");
var fs = require('fs');
const manager = require("./lib/Manager")
const engineer = require("./lib/Engineer")
const intern = require("./lib/intern")



inquirer.prompt( [{
    type: "input",
    name: "id",
    message: "Enter the ID of your Manager",
  },
  {
    type: "input",
    name: "name1",
    message: "What is their name?"
  },
  {
    type: "input",
    name: "email1",
    message: "What is their email address?"
  },
  {
    type: "input",
    name: "office1",
    message: "What is their office number?"
  },
  //End of Manager Questions
  
  {
    type: "input",
    name: "office1",
    message: "What is their office number?"
  },
  {
    type: "input",
    name: "school1",
    message: "What is their school?"
  },

]).then(function(data) {
     var filename = "testmain.html"
     var html = `
     <div class="card employee-card">
     <div class="card-header">
         <h2 class="card-title">${data.name1}</h2>
         <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
     </div>
     <div class="card-body">
         <ul class="list-group">
             <li class="list-group-item">ID: ${data.id}</li>
             <li class="list-group-item">Email: <a href="mailto:${ data.email1 }">${ data.email1 }</a></li>
             <li class="list-group-item">Office number: ${ data.office1 }</li>
         </ul>
     </div>
 </div>

     `
     
   
     fs.writeFile(filename, html, function(err) {
   
       if (err) {
         return console.log(err);
       }
   
       console.log("Your Team Member document has been created!");
   
     });
   });
  


  
  

  

  

