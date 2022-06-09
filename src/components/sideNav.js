

const sideNav = () => {
    const contentDiv = document.querySelector(".content")
    let addTaskForm = document.querySelector(".add-task-form")
    console.log(addTaskForm)
    
    const sideBar = document.createElement("div")
    sideBar.classList.add("sidebar")
    let taskLink = document.createElement("p")
    taskLink.textContent="Tasks"
    let projectLink = document.createElement("p")
    projectLink.textContent="Projects"
    
    let addIcon = document.createElement("p")
    addIcon.classList.add("addIcon")
    addIcon.textContent = "+";

    sideBar.appendChild(taskLink)
    sideBar.appendChild(projectLink)
    sideBar.appendChild(addIcon)
    contentDiv.appendChild(sideBar)

    addIcon.addEventListener("click",function() {
        addTaskForm.classList.toggle("task-form-hidden")
    })

}

export default sideNav