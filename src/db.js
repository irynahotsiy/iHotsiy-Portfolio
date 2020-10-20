

export const db = {
    "list": [{
        "id": "1",
            "name": "Skills",
            "href": "#skills"
        },
        {
            "id": "2",
            "name": "Courses",
            "href": "#courses"
        },
        {
            "id": "3",
            "name": "Experience",
            "href": "#experience"
        },
        {
            "id": "4",
            "name": "Portfolio",
            "href": "#portfolio"
        },
        {
            "id": "5",
            "name": "Contact",
            "href": "#contact"
        }
    ],

    "box": [{
            "img": require("./Photos/html.png"),
            "title": "HTML",
            "id": "1"
        },
        {
            "img": require("./Photos/css3.jpg"),
            "title": "CSS",
            "id": "2"
        },
        {
            "img":  require("./Photos/script.jpg"),
            "title": "Java Script",
            "id": "3"
        },
        {
            "img":  require("./Photos/node.png"),
            "title": "Node.js",
            "id": "4"
        },
        {
            "img": require("./Photos/command_line.png"),
            "title": "Command Line",
            "id": "5"
        },
        {
            "img": require("./Photos/ES6.jpeg"),
            "title": "ES6",
            "id": "6"
        },
        {
            "img": require("./Photos/react.png"),
            "title": "React",
            "id": "7"
        },
        {
            "img":  require("./Photos/git.webp"),
            "title": "Git",
            "id": "8"
        },
        {
            "img":  require("./Photos/vs.png"),
            "title": "Visual Studio",
            "id": "9"
        },
        {
            "img":  require("./Photos/aws.webp"),
            "title": "AWS",
            "id": "10"
        },
    ],
    "courses": [{
            "id": "1",
            "img": require("./Photos/freecodecamp.jpeg"),
            "period": "Feb 2018 - Present",
            "title": "freeCodeCamp",
            "listTitle": "As a begginer I started to learn code with FreeCodeCamp. This course helped me to acquaint with: ",
            "li": ["Responsive Web Design", "JavaScript Algorithms And Data Structures", "Front-End Libraries"]
        },
        {
            "id": "2",
            "img": require("./Photos/udemy.png"),
            "period": "January 2018",
            "title": "The web developer bootcamp",
            "listTitle": "Using materials of this course I've learnt how to use HTML, CSS, JS, jQuery and Bootstrap libraries in real projects. The most useful for me was creating color-game and to-do-list projects. Also I've learnt more about:",
            "li": ["Flexbox and grid system", "Objects and arrays", "Bootstrap"],
        },
       {
            "id": "3",
            "img": require("./Photos/WordPress.png"),
            "period": "January 2019",
            "title": "Create a Blog with WordPress",
            "listTitle": "I've got this course to understand how Wordpress works and what it is in general. I've learnt about: ",
            "li": ["Setting up site (writing, reading, comments)", "Creating new blocks with differnt elements and styling it", "Using widgets and plugins"],
        },
        {
            "id": "4",
            "img": require("./Photos/cs50.png"),
            "period": "February 2020",
            "title": "This is CS50",
            "listTitle": "During this course, I got familiar with C and Python programming languages, SQL database. I've learned more about algorithms and data structures",
        },
        {
            "id": "5",
            "img": require("./Photos/telegraf.jpg"),
            "period": "July 2020",
            "title": "Build Telegram Bots with JavaScript: The Complete Guide",
            "listTitle": "This course helped me in creating a telegram bot using the telegraf framework.",
        },
    ],
    "projects": [
        {
            "id": "1",
            "img":  require("./Photos/invitation.png"),
            "title": "Site-invitation",
            "content": ["jQuery", "HTML", "CSS"],
            "description": "This project was created using HTML, CSS and jQuery library. This is a wedding site-invitation, which contains details about date, marriage couple, bridesmaids and groomsmen, time and location of holding a wedding ceremony.",
            "github": "https://github.com/irynahotsiy/site-invitation",
            "demo": "https://irynahotsiy.github.io/site-invitation"
        },
        {
            "id": "2",
            "img":  require("./Photos/todo.png"),
            "title": "To-do-list",
            "content": ["React JS", "Styled Components"],
            "description": "Simple Todo-List was created using create-react-app. Instead of plain css I used Styled Components.",
            "github": "https://github.com/irynahotsiy/to-do-list",
            "demo": "https://toddddo-list.netlify.com"
        },
        
        {
            "id": "4",
            "img": require("./Photos/color-game.png"),
            "title": "Color-game-react",
            "content": ["React JS", "Styled Components"],
            "description": "Simple Color-Guessing-Game rewritten using create-react-app and Styled Components.",
            "github": "https://github.com/irynahotsiy/color-game-react",
            "demo": "https://color-game-react.netlify.com"
        },
        {
            "id": "5",
            "img": require("./Photos/accounting-app.png"),
            "title": "Accounting-App",
            "content": ["React JS", "Styled Components"],
            "description": "Simple Accounting-App created using create-react-app and Styled Components.",
            "github": "https://github.com/irynahotsiy/Accounting-App",
            "demo": "https://accounting-app.netlify.com"
        },
        {
            "id": "6",
            "img": require("./Photos/calc.png"),
            "title": "Calculator-App",
            "content": ["React Native", "Expo"],
            "description": "Simple Calculator App in react-native inspired by the android calculator.",
            "github": "https://github.com/irynahotsiy/Calculator-App",
        },
        {
            "id": "7",
            "img": require("./Photos/2048.png"),
            "title": "2048",
            "content": ["React Native", "Expo"],
            "description": "Simple 2048 Game in react-native.",
            "github": "https://github.com/irynahotsiy/2048",
        },
        {
            "id": "8",
            "img": require("./Photos/friends.png"),
            "title": "Basic Friends list",
            "content": ["React", "Bootstrap", "Node.js", "Express", "MySQL"],
            "description": "Test assignment task",
            "github": "https://github.com/irynahotsiy/basic-friends-list",
        },
        {
            "id": "9",
            "img": require("./Photos/school.png"),
            "title": "Simple School Api",
            "content": ["Node.js", "Express", "MySQL"],
            "description": "Test assignment task",
            "github": "https://github.com/irynahotsiy/simple-school-api",
        },
    ],
    "experience": [
        {
            "id": 1,
            "img": require("./Photos/andcards.png"),
            "company": "Andcards",
            "period": "September 2019 - December 2019",
            "position": "Intern software engineer",
            "description": "It was my first experience as a software engineer, I started my internship from writing unit tests using Chai library. Also, I was working a lot on refactoring and fixing small UI bugs.",
            "technologies": ["Chai", "JavaScript", "React JS", "Git", "GitHub", "Trello"]
        },
        {
            "id": 2,
            "img": require("./Photos/chatbots.studio.png"),
            "company": "Chatbots.Studio",
            "period": "July 2020 - August 2020",
            "position": " Internship",
            "description": "I was working on a telegram bot as a social project for women who just had a baby (https://t.me/momsAssistantDevBot).",
            "technologies": ["JavaScript", "Telegraf", "AWS", "CodeCommit", "Git", "Dialogflow", "MongoDB"]
        },
        {
            "id": 3,
            "img": require("./Photos/chatbots.studio.png"),
            "company": "Chatbots.Studio",
            "period": "September 2020 - October 2020",
            "position": " Junior Full-Stack developer",
            "description": "During this period I worked on 3 different projects mostly on the backend part. I got familiar with NestJS.",
            "technologies": ["JavaScript", "AWS","CodeCommit", "Git", "GitHub", "Jira", "SQL", "NestJS", "Telegraf"]
        }
    ],
    "social": [{
            "class": "fab fa-twitter",
            "href": "https://twitter.com/IrynavovkS",
            "id": "1"
        },
        {
            "class": "fab fa-github",
            "href": "https://github.com/irynahotsiy",
            "id": "2"
        },
        {
            "class": "fab fa-linkedin",
            "href": "https://www.linkedin.com/in/iryna-hotsiy-087aa8174/",
            "id": "3"
        }
    ]
};
