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

// ================= if any navbar link is clicked===============
const links = navList.querySelectorAll('li');
links.forEach(link => {
    link.addEventListener('click', () => {
        navList.setAttribute('data-visible', false);
        hamburgerLine.classList.remove('open');
        navList.setAttribute('aria-expanded', false);
        document.body.style.overflowY = "scroll";
    })
});

// ========================== Projects handling ==============================
import { webProjects } from "./webProjects.js";
import { jsProjects } from "./jsProjects.js";

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
    article.innerHTML = `<a href="${visitLink}" class="bg-glass">
                    <h2 class="ff-lora clr-accent fs-500">${name}</h2>
                    </a>
                    <img src="${img}" alt="${name}">
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