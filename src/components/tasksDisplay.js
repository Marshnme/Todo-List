import {Todo,todos} from "../logic/todos"
import "./tasks.css"
import taskUtility from "./taskUtilityBar"

const tasksDisplay = () => {

    taskUtility()

    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)

   
    todos.map(todo => {
        let todoItem = document.createElement("div")
        let todoTitle = document.createElement("h2")
        let todoDueBy = document.createElement("p")
        todoItem.classList.add(`todo`,`todo-}`)
        todoTitle.textContent=`${todo.title}`
        todoDueBy.textContent=`${todo.dueBy}`

        todoContainer.appendChild(todoItem)
        todoItem.appendChild(todoTitle)
        todoItem.appendChild(todoDueBy)
        
    
    })
    contentDiv.appendChild(todoContainer)
}

export default tasksDisplay