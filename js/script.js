const projectsContainer = document.getElementById('projects-container');

// Datos de ejemplo (Mock Data)
// Puedes reemplazar esto con una llamada a la API de GitHub
const projects = [
    {
        name: "pelis_v1",
        description: "Un proyecto de Películas con PHP y MySQL",
        html_url: "https://github.com/marcestruch/pelis_v1",
        image: "assets/img/pelis_v1_preview.png"
    },
    {
        name: "Practicas_JS",
        description: "Un proyecto de práctica de JavaScript",
        html_url: "https://github.com/marcestruch/Practicas_JS",
        image: "assets/img/practicas_js_preview.png"
    },
    {
        name: "Traductor",
        description: "Un proyecto de Traductor con Javascript y API",
        html_url: "https://github.com/marcestruch/Traductor",
        image: "assets/img/traductor_preview.png"
    },
    {
        name: "Gen-Pass-Marc.github.io",
        description: "Un proyecto de Generador de Contraseñas con Javascript",
        html_url: "https://github.com/marcestruch/Gen-Pass-Marc.github.io",
        image: "assets/img/gen_pass_preview.png"
    }
];

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    // Staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.description}</p>
            <a href="${project.html_url}" class="project-link" target="_blank">Ver en GitHub &rarr;</a>
        </div>
    `;
    return card;
}

function renderProjects() {
    projectsContainer.innerHTML = '';
    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsContainer.appendChild(card);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});