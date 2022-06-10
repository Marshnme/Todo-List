import {manageProjects} from "../logic/projects"

const projectsDisplay = () => {
    let {refreshProjects} = manageProjects()
    let removeIcon = document.querySelector(".add-icon")
    const contentDiv = document.querySelector(".content")

    let projectContainer = document.createElement("div")
    projectContainer.classList.add("project-container")

    let projectTitle = document.createElement("p")
    projectTitle.textContent = "WOOORK"

    projectContainer.appendChild(projectTitle)
    contentDiv.appendChild(projectContainer)

    refreshProjects()
}

export default projectsDisplay