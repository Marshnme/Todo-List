import {manageProjects} from "../logic/projects"
import sideNav from "./sideNav"
const projectsDisplay = () => {


    sideNav()
    // let taskTab = document.querySelector(".nav-tasks")
    //     let projectTab= document.querySelector(".nav-projects")
    //     taskTab.addEventListener("click",renderTasks)
    //     projectTab.addEventListener("click",renderProjects)


    let {refreshProjects} = manageProjects()
    let addIcon = document.querySelector(".add-icon")
  
    console.log(addIcon)
    let updateFormIcon = () => {
        console.log("workssss")
    }

    // addIcon.addEventListener("click",updateFormIcon)
    
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