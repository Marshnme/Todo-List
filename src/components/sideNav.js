

const sideNav = () => {
    const contentDiv = document.querySelector(".content")
    
    const sideBar = document.createElement("div")
    sideBar.classList.add("sidebar")
    let taskLink = document.createElement("p")
    taskLink.textContent="Tasks"
    taskLink.classList.add("nav-tasks")
    let projectLink = document.createElement("p")
    projectLink.textContent="Projects"
    projectLink.classList.add("nav-projects")
    
    let addIcon = document.createElement("p")
    addIcon.classList.add("add-icon")
    addIcon.textContent = "+";

    sideBar.appendChild(taskLink)
    sideBar.appendChild(projectLink)
    sideBar.appendChild(addIcon)
    contentDiv.appendChild(sideBar)

}

export default sideNav