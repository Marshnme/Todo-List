import {Todo,todos} from "../logic/todos"
import "./todos.css"

const tasksDisplay = () => {
    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)
    
    todos.map(todo => {
        let todoItem = document.createElement("div")
        todoItem.classList.add(`todo`,`todo-}`)
        let todoTitle = document.createElement("h2")
        todoTitle.textContent=`${todo.title}`
        let todoDueBy = document.createElement("p")
        todoDueBy.textContent=`${todo.dueBy}`

        todoContainer.appendChild(todoItem)
        todoItem.appendChild(todoTitle)
        todoItem.appendChild(todoDueBy)
        contentDiv.appendChild(todoContainer)
    
    })
}

export default tasksDisplay