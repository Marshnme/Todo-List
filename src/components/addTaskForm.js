

const addTaskForm = () => {
    const contentDiv = document.querySelector(".content")

    let taskForm = document.createElement("form")
    taskForm.classList.add("add-task-form")
    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for","title") 
    titleLabel.textContent = "Task Title:"
    let titleInput = document.createElement("input")
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
    priorityLabel.setAttribute("min","1")
    priorityLabel.setAttribute("max","5")
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
}

export default addTaskForm