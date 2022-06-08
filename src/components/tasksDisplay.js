import {Todo,todos} from "../logic/todos"
import {manageTodos} from "../logic/todos"
import "./tasks.css"
import taskUtility from "./taskUtilityBar"

const tasksDisplay = () => {
    let {refreshTaskList} = manageTodos()
    taskUtility()

    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)

    refreshTaskList()

}

export default tasksDisplay