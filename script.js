document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            link: "#"
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            link: "#"
        }
    ];

    const projectList = document.getElementById("projects-list");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "card";
        projectCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
            </div>
        `;
        projectList.appendChild(projectCard);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
});
