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

// var name = "Itrat Rahman"

// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Software Engineer"

// var formattedRole = HTMLheaderRole.replace("%data%", role)

// $("#header").prepend(formattedRole)
// $("#header").prepend(formattedName)

// var skills = ["awesomeness", "programming", "teaching", "JS"]

// $("#main").append(skills);
// $("#main").append(skills[0]);

// $("#main").append(skills.length);

var bio = {

    "name": "Itrat Rahman",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "01788995566",
        "email": "rahmanitrat@gmail.com",
        "github": "itratrahman",
        "location": "Dhaka"
    },
    "welcomeMessage": "Hello Everyone, this is Itrat",
    "skills": ["awesomeness", "programming", "teaching", "JS"],
    "bioPic": "images/fry.jpg"

};

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile)
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email)
var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"].github)
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location)
var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"])
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0])
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1])
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2])
var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3])


$("#header").prepend(formattedRole)
$("#header").prepend(formattedName)
$("#header").append(formattedMobile)
$("#header").append(formattedEmail)
$("#header").append(formattedGithub)
$("#header").append(formattedLocation)
$("#header").append(formattedBioPic)
$("#header").append(formattedWelcomeMsg)
$("#header").append(HTMLskillsStart)
$("#header").append(formattedSkills1)
$("#header").append(formattedSkills2)
$("#header").append(formattedSkills3)
$("#header").append(formattedSkills4)