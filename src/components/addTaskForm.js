

const addTaskForm = () => {
    const contentDiv = document.querySelector(".content")

    let taskForm = document.createElement("form")
    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for","title") 
    titleLabel.textContent = "Task Title:"
    let titleInput = document.createElement("input")
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name="title"

    taskForm.appendChild(titleLabel)
    taskForm.appendChild(titleInput)
    contentDiv.appendChild(taskForm)
}

export default addTaskForm