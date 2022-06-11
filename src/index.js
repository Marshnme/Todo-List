import sideNav from "./components/sideNav"
import {Todo,manageTodos} from "./logic/todos";
import Projects from "./logic/projects";
import tasksDisplay from "./components/tasksDisplay"
import projectsDisplay from "./components/projectsDisplay";
import addTaskForm from "./components/addTaskForm";
import "./index.css"

let {refreshTaskList} = manageTodos()

let body = document.querySelector("body")
const contentDiv = document.createElement("div")
contentDiv.classList.add("content")
body.appendChild(contentDiv)



// let todoOne = Todo("Clean Room","I was gonna grab the broom","tomorrow",5,true)
// todoOne.addTodo()

// let todoTwo = Todo("code","I was gonna grab the computer","todaymorrow",1,false)
// todoTwo.addTodo()

// let todoThree = Todo("work","work","work",1,false)
// todoThree.addTodo()

// todo


    // single page app
    // home screen will have inputs for adding todos and projects that will hold todos. Choose which project your todo goes into
    // Factories to create todos and projects
    // todos will have title,desc,duedate,priority.....etc
    // Keep logic seperated and Dom related stuff seperate.
    // interface should be able to view all projects,view all todays in each project,expand a single todo to see/edit its details,and delete a todo.
    // checkout date-fns package 
    // use local storage to keep the session of the user

    


    const renderDisplays = () =>{
        addTaskForm()
        
        tasksDisplay()
        
    }
    
    renderDisplays()

    
    
    

    
    function renderTasks(){
        let navContainer = document.querySelector(".sidebar")
        let projectContainer = document.querySelector(".project-container")
        console.log(contentDiv)
        if(contentDiv.children[2].className !== "todo-container"){
            contentDiv.removeChild(navContainer)
            contentDiv.removeChild(projectContainer)
            tasksDisplay()
        } 
        
        
        console.log("tASK BE RENDER")
    
        let taskTab = document.querySelector(".nav-tasks")
        let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)
    }

    function renderProjects(){
        let navContainer = document.querySelector(".sidebar")
        let todoContainer = document.querySelector(".todo-container")
        console.log(contentDiv)
        if(contentDiv.children[2].className !== "project-container"){
            contentDiv.removeChild(navContainer)
            contentDiv.removeChild(todoContainer)
            projectsDisplay()
        } 
         
        
        
        
        console.log("PROJECT BE RENDER")
        
        
        let taskTab = document.querySelector(".nav-tasks")
        let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)
    }
    let taskTab = document.querySelector(".nav-tasks")
    let projectTab= document.querySelector(".nav-projects")
        taskTab.addEventListener("click",renderTasks)
        projectTab.addEventListener("click",renderProjects)