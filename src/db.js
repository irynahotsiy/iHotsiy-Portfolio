

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
            "name": "Portfolio",
            "href": "#portfolio"
        },
        {
            "id": "4",
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
            "img": require("./Photos/command_line.png"),
            "title": "Command Line",
            "id": "4"
        },
        {
            "img": require("./Photos/ES6.jpeg"),
            "title": "ES6",
            "id": "5"
        },
        {
            "img": require("./Photos/react.png"),
            "title": "React",
            "id": "6"
        }
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
        }
    ],
    "projects": [{
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
            "content": ["React JS", "HTML", "Styled Components"],
            "description": "Simple Todo-List was created using create-react-app. Instead of plain css I used Styled Components.",
            "github": "https://github.com/irynahotsiy/to-do-list",
            "demo": "https://toddddo-list.netlify.com"
        },
        {
            "id": "3",
            "img": require("./Photos/color.png"),
            "title": "Color-game",
            "content": ["JS", "HTML", "CSS"],
            "description": 'Simple Color-Guessing-Game. It was assigned as a part of Udemy course "The Web Developer Bootcamp".',
            "github": "https://github.com/irynahotsiy/color-Game",
            "demo": "https://colorr-game.netlify.com"

        },
        {
            "id": "4",
            "img": require("./Photos/color-game.png"),
            "title": "Color-game-react",
            "content": ["React JS", "HTML", "Styled Components"],
            "description": "The same simple Color-Guessing-Game rewritten using create-react-app and Styled Components.",
            "github": "https://github.com/irynahotsiy/color-game-react",
            "demo": "https://color-game-react.netlify.com"

        },
        {
            "id": "5",
            "img": require("./Photos/weather.png"),
            "title": "Weather-App",
            "content": ["React JS", "HTML", "Styled Components"],
            "description": "Simple Weather-App created using create-react-app and Styled Components.",
            "github": "https://github.com/irynahotsiy/Weather",
            "demo": "https://weather-coords.netlify.com"
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