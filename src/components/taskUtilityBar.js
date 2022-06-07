

const taskUtilityBar = () => {

    const contentDiv = document.querySelector(".content");

    let utilityBar = document.createElement("div")
    utilityBar.classList.add("utility-bar")
    let addIcon = document.createElement("p")
    addIcon.classList.add("addIcon")
    addIcon.textContent = "+";

    utilityBar.appendChild(addIcon)
    contentDiv.appendChild(utilityBar)

    // addIcon.addEventListener("click",)
}
export default taskUtilityBar