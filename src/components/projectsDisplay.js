

const projectsDisplay = () => {

    const contentDiv = document.querySelector(".content")

    let projectContainer = document.createElement("div")
    projectContainer.classList.add("project-container")
    let projectTitle = document.createElement("p")
    projectTitle.textContent = "WOOORK"
    projectContainer.appendChild(projectTitle)
    contentDiv.appendChild(projectContainer)
}

export default projectsDisplay