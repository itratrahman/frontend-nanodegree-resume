/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Itrat Rahman");

// var awesomeThoughts = "My name is Itrat and I am AWESOME";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(awesomeThoughts);

// console.log(funThoughts);

// //Appending fun thought to the page
// $("#main").append(funThoughts);

var name = "Itrat Rahman"

var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Software Engineer"

var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)