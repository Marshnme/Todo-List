

const sideNav = () => {
    const contentDiv = document.querySelector(".content")

    const sideBar = document.createElement("div")
    sideBar.classList.add("sidebar")
    let taskLink = document.createElement("p")
    taskLink.textContent="Tasks"
    let projectLink = document.createElement("p")
    projectLink.textContent="Projects"

    sideBar.appendChild(taskLink)
    sideBar.appendChild(projectLink)
    contentDiv.appendChild(sideBar)

}

export default sideNav