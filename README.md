 
# Employee Template Engine
 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description
This is an app that generates a webpage that displays information about employees on a team.  First the user is asked to select what type of team member they would like to add to the template: Manager, Engineer, or Intern.  Once the employee’s level is selected, the user is asked a series of questions specific to each team member using the computer's CLI. Data from the answers is stored into an array then rendered to a HTML page that displays each employee's information on a card.  I used classes and constructor functions in three .js files for the Manager, Engineer, and Intern to generate the cards for each employee.  These files were then tested by requiring the Jest Node package, and using given test code.  User questions are generated for this app using the Inquirer Node package.  Super constructors are used to generate the data for each employee, with each inheriting methods and properties from the base class of "Employee." By requiring the "Employee.js" file in the code for each employee a series of standard questions is asked for each along with a specific question aligning with their role.   
 
## Installation
This application requires the following to be installed: a 'package.json' file, 'jest' node package, and 'inquirer' node package.
 
## Usage
Below is a short GIF demonstrating how to use this application using the CLI.  I've also included a link to a complete tutorial.


<img src = "Develop\template_gif.gif" />

<br>

[Link to Video](https://drive.google.com/file/d/1gU80h1IAJ4VCzdEAIu8XCgujELmAYqJz/view)

## Contributors
Ben Robinson

## Testing
npm run test

## License: 

For more information about the license click on the link below. 


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
### Questions: 

![GitHub Logo](GitHub-Mark-32px.png)
[GitHub Profile](https://github.com/Tarbo13)

If you have additional questions please email me **mailto:**<robinson.dri@gmail.com>

### Table of Contents:
- [Description](#Description)
- [Installation](#Installation) 
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [License](#License)
- [Questions](#Questions)