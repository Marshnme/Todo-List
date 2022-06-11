import sideNav from "./components/sideNav"
import {Todo,manageTodos} from "./logic/todos";
import Projects from "./logic/projects";
import tasksDisplay from "./components/tasksDisplay"
import projectsDisplay from "./components/projectsDisplay";
import addTaskForm from "./components/addTaskForm";
import addProjectForm from "./components/addProjectForm"
import "./index.css"

let body = document.querySelector("body")
const contentDiv = document.createElement("div")
contentDiv.classList.add("content")
body.appendChild(contentDiv)



    // single page app
    // interface should be able to view all projects,view all todays in each project,expand a single todo to see/edit its details,and delete a todo.
    // checkout date-fns package 
    

    

// create session storage to stay on current tab on refresh?
    const renderDisplays = () =>{
        // maybe dont render form? 
        // render and remove form in same fashion as task/project displays?
        addTaskForm()
        addProjectForm()
        
        tasksDisplay()
        
    }
    
    renderDisplays()

    
    
    

    
    function renderTasks(){
        let navContainer = document.querySelector(".sidebar")
        let projectContainer = document.querySelector(".project-container")
        // console.log(contentDiv)
         // very bad logic,easy to break
        if(contentDiv.children[3].className !== "todo-container"){
            contentDiv.removeChild(navContainer)
            contentDiv.removeChild(projectContainer)
            tasksDisplay()
        } 
        
        
        // console.log("tASK BE RENDER")
    
        let taskTab = document.querySelector(".nav-tasks")
        let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)
    }

    function renderProjects(){
        let navContainer = document.querySelector(".sidebar")
        let todoContainer = document.querySelector(".todo-container")
        // console.log(contentDiv)
        // very bad logic,easy to break
        if(contentDiv.children[3].className !== "project-container"){
            contentDiv.removeChild(navContainer)
            contentDiv.removeChild(todoContainer)
            projectsDisplay()
        } 
        // console.log("PROJECT BE RENDER")
        
        
        let taskTab = document.querySelector(".nav-tasks")
        let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)
    }

    let taskTab = document.querySelector(".nav-tasks")
    let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)