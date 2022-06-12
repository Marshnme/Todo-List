
import { manageTodos,Todo } from "../logic/todos"
import tasksDisplay from "./tasksDisplay"
import "./tasks.css"
import { manageProjects } from "../logic/projects"

const addTaskForm = () => {

    let {refreshTaskList} = manageTodos()
    let {refreshProjectList} = manageProjects()
    const contentDiv = document.querySelector(".content")

    // Creating form elements and adding content
    let taskForm = document.createElement("form")
    taskForm.classList.add("add-task-form","task-form-hidden")
    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for","title") 
    titleLabel.textContent = "Task Title:"
    let titleInput = document.createElement("input")
    titleInput.required = true;
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name="title"
    let descLabel = document.createElement("label")
    descLabel.setAttribute("for","desc") 
    descLabel.textContent = "Task Description:"
    let descInput = document.createElement("input")
    descInput.type = "text"
    descInput.id = "desc"
    descInput.name="desc"
    let priorityLabel = document.createElement("label")
    priorityLabel.setAttribute("for","priority") 
    priorityLabel.textContent = "Task Priority:"
    let priorityInput = document.createElement("input")
    priorityInput.type = "range"
    priorityInput.id = "priority"
    priorityInput.name="priority"
    priorityInput.setAttribute("value","1")
    priorityInput.setAttribute("min","1")
    priorityInput.setAttribute("max","5")
    let dueByLabel = document.createElement("label")
    dueByLabel.setAttribute("for","dueBy") 
    dueByLabel.textContent = "Task DueDate:"
    let dueByInput = document.createElement("input")
    dueByInput.type = "datetime-local"
    dueByInput.id = "dueBy"
    dueByInput.name="dueBy"
    let completeLabel = document.createElement("label")
    completeLabel.setAttribute("for","complete") 
    completeLabel.textContent = "Task completed:"
    let completeInput = document.createElement("input")
    completeInput.type = "checkbox"
    completeInput.id = "complete"
    completeInput.name="complete"
    let submitButton = document.createElement("button");
    submitButton.classList.add("submit-task-button")
    submitButton.textContent = "Submit Task"

    // appending form elements and form
    taskForm.appendChild(titleLabel)
    taskForm.appendChild(titleInput)
    taskForm.appendChild(descLabel)
    taskForm.appendChild(descInput)
    taskForm.appendChild(dueByLabel)
    taskForm.appendChild(dueByInput)
    taskForm.appendChild(priorityLabel)
    taskForm.appendChild(priorityInput)
    taskForm.appendChild(completeLabel)
    taskForm.appendChild(completeInput)
    taskForm.appendChild(submitButton)
    contentDiv.appendChild(taskForm)

    function createTask(e){
        e.preventDefault()
        
        if(e.target.form.parentElement.children[3].className === "todo-container"){
            console.log("TASKSUBMIT")
            let task = Todo(`${titleInput.value}`,`${descInput.value}`,`${dueByInput.value}`,`${priorityInput.value}`,`${completeInput.checked}`);
            task.addTodo(e)
            refreshTaskList()
            clearForm()
            // maybe just grab contentDiv.className
        }else if(e.target.form.parentElement.children[3].className === "project-container"){
            e.preventDefault()
            console.log("PROJECTSUBMIT")
                let task = Todo(`${titleInput.value}`,`${descInput.value}`,`${dueByInput.value}`,`${priorityInput.value}`,`${completeInput.checked}`);
                task.addTodoToProject(e)
                refreshProjectList()
                clearForm()
        }
    }
    


    function clearForm(){
        taskForm.classList.toggle("task-form-hidden")
        titleInput.value = ''
        descInput.value=''
        dueByInput.value=''
        priorityInput.value = 1
        completeInput.checked = false
    }
    submitButton.addEventListener("click",createTask)
}

export default addTaskForm