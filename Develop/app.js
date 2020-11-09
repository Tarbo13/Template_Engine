const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let employeeArr = [];


function addEmployee(){

    inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern",]           

        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter an number";
            }
           
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the managers office phone number?",
            name: "officeNumber",
            when: (answer) => answer.role === "Manager",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";              
            },
            
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "github",
            when: (answer) => answer.role === "Engineer"
        },
        {
            type: "input",
            message: "What is the intern's school name?",
            name: "school",
            when: (answer) => answer.role === "Intern"
        }, 
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "continue",
            choices: ["yes", "no"]            
        }

    ]).then(function(response){
        // console.log(response.role);
        // console.log(response.continue);

        function buildMGR(){
            let manager = new Manager(response.name, response.id, response.emial, response.officeNumber);
            employeeArr.push(manager);
        }

        function buildENG() {
            let engineer = new Engineer(response.name, response.id, response.email, response.github);
            employeeArr.push(engineer);
        }

        function buildINT() {
            let intern = new Intern(response.name,
                response.id, response.email, response.school);
                employeeArr.push(intern);
        }

        if (response.role === "Manager"){
            buildMGR();
        }
        if (response.role === "Engineer") {
            buildENG();
        }
        if (response.role === "Intern") {
            buildINT();
        }
        if (response.continue === "yes") {
            addEmployee();
        } else       
                    
        fs.writeFile(outputPath, render(employeeArr), function(err){
            if (err){
                console.log(err);
            }
                console.log("Your employee infomation has been saved");                        
        })
            
    })
}

addEmployee();




