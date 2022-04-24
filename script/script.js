function getElement(Class) {
    return document.querySelector(Class);
}

const navList = getElement('.navlist');
const hamburgerMenu = getElement('.hamburger');
const hamburgerLine = getElement('.line');


hamburgerMenu.addEventListener('click', handleNavbar);


function handleNavbar() {
    let visibility = navList.getAttribute('data-visible');

    if (visibility === 'false') {
        navList.setAttribute('data-visible', true);
        navList.setAttribute('aria-expanded', true);
        hamburgerLine.classList.add('open');
        document.body.style.overflowY = "hidden";
        return;
    }
    navList.setAttribute('data-visible', false);
    hamburgerLine.classList.remove('open');
    navList.setAttribute('aria-expanded', false);
    document.body.style.overflowY = "scroll";
}

// ================= if any navbar link is clicked================
const links = navList.querySelectorAll('li');
links.forEach(link => {
    link.addEventListener('click', () => {
        navList.setAttribute('data-visible', false);
        hamburgerLine.classList.remove('open');
        navList.setAttribute('aria-expanded', false);
        document.body.style.overflowY = "scroll";
    })
});
// ========================= Js Projects =====================================
const jsProjects = [{
            id: 1,
            name: 'Todo list App',
            img: 'images/projects/Todolistapp.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/To-do-App/',
            sourceCode: 'https://github.com/nabeelahmed1699/To-do-App',
            desc: `The basic function of this app is to create a list of todos. It also contain random quote generator functionality achieved using an api.`
        },
        {
            id: 2,
            name: 'Calculator App',
            img: 'images/projects/calculatorapp.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/Calculator-App/',
            sourceCode: 'https://github.com/nabeelahmed1699/Calculator-App',
            desc: `Basic calculator app that can perform basic arithmatic functions.`
        },

        {
            id: 3,
            name: 'Weather App',
            img: 'images/projects/weatherapp.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/Weather-App/',
            sourceCode: 'https://github.com/nabeelahmed1699/Weather-App',
            desc: `Weather app using openWeather api.It is an open source api. Quite fun project.`
        },
        {
            id: 4,
            name: 'Event Counter App',
            img: 'images/projects/Eventcounterapp.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/event-countdown-app/',
            sourceCode: 'https://github.com/nabeelahmed1699/event-countdown-app',
            desc: `This app will count the remaining time in a specified event accur.I've set it to my next birthday!`
        },
        {
            id: 5,
            name: 'Rock paper scissor Game',
            img: 'images/projects/rockpapergame.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/Rock-paper-scissor-game/',
            sourceCode: 'https://github.com/nabeelahmed1699/Rock-paper-scissor-game',
            desc: `A fun project trying to built a game.Select one card among three and computer will randomly choose against it.`
        },
        {
            id: 6,
            name: 'Screen Recorder App',
            img: 'images/projects/screenrecorderapp.PNG',
            visitLink: 'https://nabeelahmed1699.github.io/screen-recorder/',
            sourceCode: 'https://github.com/nabeelahmed1699/screen-recorder',
            desc: `Screen recorder app. This app only works on desktops not in mobiles!`
        }
    ]
    // ========================= Web Projects ====================================
const webProjects = [{
        id: 2,
        name: 'Space website',
        desc: 'Space website is a challenge project from frontend mentor.Check the source code in my github repo!',
        link: 'https://nabeelahmed1699.github.io/space-website/',
        background: 'images/projects/spacewebsite.PNG'
    },
    {
        id: 3,
        name: `Franky's website`,
        desc: `Franky's is my local fast food restaurant.I tried and created a landing page for the restaurant.`,
        link: 'https://nabeelahmed1699.github.io/Fast-food-website-mockup/',
        background: 'images/projects/frankyswebsite.PNG'
    },
    {
        id: 4,
        name: 'Apple website clone',
        desc: 'I’ve tried and clone the apple website landing not pixel perfect but tried my best to make it same as much as possible, also it is completely responsive. Visit my Github to see the project source code fork it and make it yours.',
        link: 'https://nabeelahmed1699.github.io/Apple-clone/',
        background: 'images/projects/appleclone.PNG'
    }
];
// ========================== Projects handling ==============================
// import { webProjects } from "./webProjects.js";
// import { jsProjects } from "./jsProjects.js";

// ===================== Web projects creation =============================
function createWebProject(project) {
    const { name, id, link, desc, background } = project;
    let article = document.createElement('article');
    article.classList.add('project');
    article.classList.add('shadow-2');
    article.innerHTML = `<div class="project-card flex ff-lora bg-dark shadow-1">
                    <h3 class=" clr-accent ">${name}</h3>
                    <p class="fs-300 ">${desc}</p>
                    <a href="${link}" class="btn project-btn clr-accent ">Visit</a>
                </div>`
    article.style.backgroundImage = `url(${background})`;
    return article;
}
// ===================== Js projects creation ==================
function createJsProject(project) {
    const { name, visitLink, img, desc } = project;
    let article = document.createElement('article');
    article.classList.add('js-project');
    article.classList.add('bg-secondary');
    article.innerHTML = `<a href="${visitLink}">
                    <h2 class="ff-lora clr-accent fs-500 bg-glass">${name}</h2>
                    </a>
                    <img loading="lazy" src="${img}" alt="${name}">
                    <p class="ff-lora">${desc}</p>`
    return article;
}
// ===================== Render projects =======================
function renderProject(query, projectsArray, createFunction) {
    const projectContainer = getElement(query);
    projectsArray.map(project => {
        projectContainer.appendChild(createFunction(project))
    });
}
renderProject('.web-projects-container', webProjects, createWebProject);
renderProject('.js-projects-container', jsProjects, createJsProject);