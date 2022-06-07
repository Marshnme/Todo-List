const projectUtilityBar = () => {
    const contentDiv = document.querySelector(".content");

    let utilityBar = document.createElement("div")
    utilityBar.classList.add("utility-bar")
    let addIcon = document.createElement("p")
    addIcon.textContent = "+";

    utilityBar.appendChild(addIcon)
    contentDiv.appendChild(utilityBar)
}
export default projectUtilityBar