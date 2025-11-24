const projectsContainer = document.getElementById('projects-container');

// Datos de ejemplo (Mock Data)
// Puedes reemplazar esto con una llamada a la API de GitHub
const projects = [
    {
        name: "Proyecto Alpha",
        description: "Una aplicación web revolucionaria para la gestión de tareas minimalista.",
        html_url: "#",
        image: "project_placeholder.png"
    },
    {
        name: "Data Visualizer",
        description: "Herramienta de visualización de datos en tiempo real usando D3.js.",
        html_url: "#",
        image: "project_placeholder.png"
    },
    {
        name: "E-Commerce Core",
        description: "Backend robusto para plataformas de comercio electrónico escalables.",
        html_url: "#",
        image: "project_placeholder.png"
    },
    {
        name: "AI Chatbot",
        description: "Bot conversacional impulsado por inteligencia artificial y procesamiento de lenguaje natural.",
        html_url: "#",
        image: "project_placeholder.png"
    },
    {
        name: "Portfolio V1",
        description: "La primera versión de mi portafolio personal, enfocada en la tipografía.",
        html_url: "#",
        image: "project_placeholder.png"
    },
    {
        name: "Weather App",
        description: "Aplicación del clima con geolocalización y pronósticos precisos.",
        html_url: "#",
        image: "project_placeholder.png"
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

// Opcional: Fetch real de GitHub
/*
async function fetchGitHubProjects(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        // Mapear datos y renderizar
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}
*/
