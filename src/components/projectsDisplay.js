import {manageProjects} from "../logic/projects"
import sideNav from "./sideNav"
const projectsDisplay = () => {

    // closes taskForm if left open on swap
    let addTaskForm = document.querySelector(".add-task-form")
    addTaskForm.classList.add("task-form-hidden")
    sideNav()
    let addProjectForm = document.querySelector(".add-project-form")


    let {refreshProjects} = manageProjects()
    let addIcon = document.querySelector(".add-icon")
  
    console.log(addIcon)
    let updateFormIcon = () => {
        console.log("workssss")
        addProjectForm.classList.toggle("project-form-hidden")
    }

    addIcon.addEventListener("click",updateFormIcon)
    
    const contentDiv = document.querySelector(".content")

    let projectContainer = document.createElement("div")
    projectContainer.classList.add("project-container")

    let projectTitle = document.createElement("p")
    projectTitle.textContent = "WOOORK"

    projectContainer.appendChild(projectTitle)
    contentDiv.appendChild(projectContainer)

    // refreshProjects()
}

export default projectsDisplay