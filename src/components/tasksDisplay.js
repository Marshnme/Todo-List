import {Todo,todos} from "../logic/todos"
import {manageTodos} from "../logic/todos"
import sideNav from "./sideNav"
import "./tasks.css"

const tasksDisplay = () => {
    // closes projectForm if left open on swap
    let addProjectForm = document.querySelector(".add-project-form")
    addProjectForm.classList.add("project-form-hidden")
    
    sideNav()

    
    let {refreshTaskList} = manageTodos()
    
    let addTaskForm = document.querySelector(".add-task-form")
    let addIcon = document.querySelector(".add-icon")
    console.log(addIcon)
    // on each render its reapplying event listneder so its toggling form off and on again.
    function toggleTaskForm(){

        console.log("task toggle")
        console.log(addTaskForm)
        addTaskForm.classList.toggle("task-form-hidden")
    }

    addIcon.addEventListener("click",toggleTaskForm)

    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)

    refreshTaskList()
}

export default tasksDisplay