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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile)
// var formattedEmail = HTMLemail.replace("%data%", bio["contacts"].email)
// var formattedGithub = HTMLgithub.replace("%data%", bio["contacts"].github)
// var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"].location)
var formattedBioPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0])
// var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1])
// var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2])
// var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3])


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// $("#header").append(formattedMobile)
// $("#header").append(formattedEmail)
// $("#header").append(formattedGithub)
// $("#header").append(formattedLocation)
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
// $("#header").append(HTMLskillsStart)
// $("#header").append(formattedSkills1)
// $("#header").append(formattedSkills2)
// $("#header").append(formattedSkills3)
// $("#header").append(formattedSkills4)

var education = {

    "schools": [
    {
        "name": "Univeristy College London",
        "location": "London",
        "degree": "Masters",
        "majors": ["EE"],
        "dates": 2015,
        "url": "http://176.32.230.23/itratrahman.com/"
    },
    {
        "name": "Univeristy College London",
        "location": "London",
        "degree": "Bachelors",
        "majors": ["EE"],
        "dates": 2014,
        "url": "http://176.32.230.23/itratrahman.com/"
    }
    ],

    "onlineCourses": [
    {
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udacity.com/"
    }

    ]

};

if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills){

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#skills").append(formattedSkill);

    }

};


// var cameron = {};

// cameron.job = "course dev";

// var makeCourse = function(){

//     //make a course
//     console.log("Made a course");
// }

// var courses = 0;

// while(cameron.job == "course dev"){

//     makeCourse();

//     courses = courses + 1;

//     if(courses === 10){

//         cameron.job = "learning specialist";

//     }
// }

// console.log(cameron.job);

// for(var i=0; i<9; i++){

//     console.log(i);
// }

work = {

    "jobs" : [

        {
            "employer":"Southeast Bank Limited",
            "title":"Software Engineering Intern",
            "location":"Dhaka",
            "dates": "05/05/2016-05/08/2016",
            "description": "Developed Optical Character Recognition System (contains machine learning classification in design pipeline) to convert raw bank documents into text documents."
        },
        {
            "employer": "Insight Robotics",
            "title": "Software Engineering Intern",
            "location": "Hong Kong",
            "dates": "09/11/2015-08/01/2016",
            "description": "Successfully developed fast and efficient Smoke Detection Algorithm that the company decided to use on their fire detection robots for long term"

        },
        {
            "employer": "University College London",
            "title": "Summer Research Intern",
            "location": "London",
            "dates": "1/07/2014-30/09/2014",
            "description": "Successfully researched and tested a new fibre-dispersion tolerant multi-subcarrier modulation scheme"

        }
    ]

};


function displayWork(){


    for (job in work.jobs){

    //Create a new div for work experience
        $("#workExperience").append(HTMLworkStart);

        //Concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedDescription);

    }

}

displayWork();


