import {Todo,todos} from "../logic/todos"
import {manageTodos} from "../logic/todos"
import "./tasks.css"
import taskUtility from "./taskUtilityBar"

const tasksDisplay = () => {
    let {toggleComplete,refreshTaskList} = manageTodos()
    taskUtility()

    const contentDiv = document.querySelector(".content")

    let todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")
    contentDiv.appendChild(todoContainer)

    refreshTaskList()

// //    using this exact code in my todo refreshtask func
//     todos.map(todo => {
//         let todoItem = document.createElement("div")
//         let todoTitle = document.createElement("h2")
//         let todoDueBy = document.createElement("p")
//         todoItem.classList.add(`todo`,`todo-${todo.id}`)
//         todoTitle.textContent=`${todo.title}`
//         todoDueBy.textContent=`${todo.dueBy}`
//         todoItem.addEventListener("click",toggleComplete)

//         todoContainer.appendChild(todoItem)
//         todoItem.appendChild(todoTitle)
//         todoItem.appendChild(todoDueBy)
        
    
//     })
//     contentDiv.appendChild(todoContainer)
}

export default tasksDisplay