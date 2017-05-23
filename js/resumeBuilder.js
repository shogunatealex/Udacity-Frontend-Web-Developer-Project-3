
var bio = {
    name: "Alex Anderson",
    role: "Web Developer",
    contacts: {
        mobile: "302-359-7562",
        email: "alexanderson234@gmail.com",
        github: "https://github.com/shogunatealex",
        twitter: "@alexanderson234",
        location: "Tuscaloosa, AL"
    },
    welcomeMessage: "One must maintain a mindset of constant improvement",
    skills: ["C", "Java", "Python", "HTML5", "CSS3"],
    biopic: "./images/profile-picture.png"
};

var education = {
    schools: [
        {
            name: "The University of Alabama",
            location: "Tuscaloosa, AL",
            degree: "Bachelor",
            majors: ["Computer Science"],
            dates: "August 2014 - Present",
            url: "https://www.ua.edu/"
        },
        {
            name: "Kwansei Gakuin University (関西学院大学)",
            location: "Nishinomiya, Japan",
            degree: "Study Abroad",
            majors: ["Japanese"],
            dates: "March 2016 - January 2017",
            url: "http://global.kwansei.ac.jp/"
        },
        {
            name: "Università Degli Studi di Modena e Reggio Emilia (UNIMORE)",
            location: "Reggio Emilia, Italy",
            degree: "Study Abroad",
            majors: ["Italian"],
            dates: "May 2015 - August 2015",
            url: "http://www.international.unimore.it/"
        }
    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer",
            school: "Udacity.com",
            dates: "May 2017 - June 2017",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var work = {
    jobs: [
        {
            employer: "The University of Alabama",
            title: "Office of Library Technology Student Assistant",
            location: "Tuscaloosa, AL",
            dates: "August 2014 - Present",
            description: "I performed work in a medium-sized IT department, maintaining and troubleshooting these desktop computer environments. I was responsible for working with clients as we fix any hardware, or software issues they have with any one of our 700 workstations. My responsibilities also included adding and maintaining software on computers as well as troubleshooting any problems with software or drivers. I troubleshooted both Mac and PC computers as well as create scripts to make this process easier."
        },
        {
            employer: "Darden Red Lobster",
            title: "Service Assistant",
            location: "Dover, DE",
            dates: "August 2013 - July 2014",
            description: "I was responsible at this restaurant for assisting the staff at keeping the restaurant moving in a smooth fashion. My responsibilities included clearing and resetting tables, walking food to tables, keeping the floors and counters clear and clean, rolling silverware when supplies run low, and cleaning the bathrooms upon request."
        }
    ]
};

var projects = {
    projects: [
        {
            title: "ChocAn System Terminal",
            dates: "August 2015 - December 2015",
            description: "A software written in Java utililizing built in GUI features to emulate an insurance terminal",
            images: ["http://placehold.it/200/200", "http://placehold.it/200/200"]
        }
    ]
};

education.display = function addEducation() {
    education.schools.forEach(function (school) {
        var start = HTMLschoolStart;
        var name = HTMLschoolName.replace("%data%", school.name);
        var url = school.url;
        name = name.replace("#", url);
        var location = HTMLschoolLocation.replace("%data%", school.location);
        var degree = HTMLschoolDegree.replace("%data%", school.degree);
        var majors = HTMLschoolMajor.replace("%data%", school.majors);
        var dates = HTMLschoolDates.replace("%data%", school.dates);

        $("#education").append(start);
        $(".education-entry:last").append(name);
        $(".education-entry:last").append(location);
        $(".education-entry:last").append(dates);
        school.majors.forEach(function(major){
          var majorAppend = HTMLschoolMajor.replace("%data%", major);
          $(".education-entry:last").append(majorAppend);
        })
        $(".education-entry:last").append(degree);


    });
    if (education.onlineCourses.length > 0) {
          $("#education").append(HTMLonlineClasses);
          education.onlineCourses.forEach(function (course) {
            var start = HTMLschoolStart;
            var title = HTMLonlineTitle.replace("%data%", course.title);
            title = title.replace("#", course.url);
            var name = HTMLonlineSchool.replace("%data%", course.school);
            var dates = HTMLonlineDates.replace("%data%", course.dates);

            $("#education").append(start);
            $(".education-entry:last").append(title);
            $(".education-entry:last").append(name);
            $(".education-entry:last").append(dates);
        });
    }
};

bio.display = function addBio() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    var pic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#topContacts, #footerContacts").prepend(location);
    $("#topContacts, #footerContacts").prepend(github);
    $("#topContacts, #footerContacts").prepend(twitter);
    $("#topContacts, #footerContacts").prepend(email);
    $("#topContacts, #footerContacts").prepend(mobile);

    $("#header").prepend(role);
    $("#header").prepend(name);
    $("#header").append(pic);
    $("#header").append(welcome);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });

};

work.display = function addWork() {
    work.jobs.forEach(function (job) {
        var employer = HTMLworkEmployer.replace("%data%", job.employer);
        var title = HTMLworkTitle.replace("%data%", job.title);
        var location = HTMLworkLocation.replace("%data%", job.location);
        var dates = HTMLworkDates.replace("%data%", job.dates);
        var description = HTMLworkDescription.replace("%data%", job.description);
        var employerAndTitle = employer + title;

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(employerAndTitle);
        $(".work-entry:last").append(location);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(description);
    });
};

projects.display = function addProjects() {
    projects.projects.forEach(function (project) {
        var title = HTMLprojectTitle.replace("%data%", project.title);
        var dates = HTMLprojectDates.replace("%data%", project.dates);
        var description = HTMLprojectDescription.replace("%data%", project.description);


        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(description);
        project.images.forEach(function(image){
          var imageAppend = HTMLprojectImage.replace("%data%", image);
          $(".project-entry:last").append(imageAppend);
        });
    });
};

function addMap() {
  $("#mapDiv").append(googleMap);
  $(".map").append("<script src=\"http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDqiVYJ8SK0QZgJKRxsGw4dg2y5hebyiwo\"></script>");
}

bio.display();
work.display();
projects.display();
education.display();
addMap();
