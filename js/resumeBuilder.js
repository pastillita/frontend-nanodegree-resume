/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Vik"); jquery seletor

/*
	var firstName = "james";
	var age = 32;
	console.log(firstName);
 */

/*
var awesomeThoughts = "I am Vik and I am awesome";
var funThoughts = awesomeThoughts.replace("awesome" , "fun");
console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%" , "vik");
var formattedRole = HTMLheaderRole.replace("%data%" , "wd");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var audacity = "audacity";

var udacity = audacity.slice(1);

console.log(udacity);

var skills = ["awesomeness" , "programming", "teaching", " JS"];

console.log(skills.length);