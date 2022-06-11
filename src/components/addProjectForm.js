import { manageProjects,Project } from "../logic/projects"
import "./projects.css"

const addProjectForm = () => {
    const contentDiv = document.querySelector(".content")

    // Creating form elements and adding content
    let projectForm = document.createElement("form")
    projectForm.classList.add("add-project-form","project-form-hidden")
    let titleLabel = document.createElement("label")
    titleLabel.setAttribute("for","title") 
    titleLabel.textContent = "Project Title:"
    let titleInput = document.createElement("input")
    titleInput.required = true;
    titleInput.type = "text"
    titleInput.id = "title"
    titleInput.name="title"
    let descLabel = document.createElement("label")
    descLabel.setAttribute("for","desc") 
    descLabel.textContent = "Project Description:"
    let descInput = document.createElement("input")
    descInput.type = "text"
    descInput.id = "desc"
    descInput.name="desc"
    let priorityLabel = document.createElement("label")
    priorityLabel.setAttribute("for","priority") 
    priorityLabel.textContent = "Project Priority:"
    let priorityInput = document.createElement("input")
    priorityInput.type = "range"
    priorityInput.id = "priority"
    priorityInput.name="priority"
    priorityInput.setAttribute("value","1")
    priorityInput.setAttribute("min","1")
    priorityInput.setAttribute("max","5")
    let dueByLabel = document.createElement("label")
    dueByLabel.setAttribute("for","dueBy") 
    dueByLabel.textContent = "Project DueDate:"
    let dueByInput = document.createElement("input")
    dueByInput.type = "datetime-local"
    dueByInput.id = "dueBy"
    dueByInput.name="dueBy"
    let completeLabel = document.createElement("label")
    completeLabel.setAttribute("for","complete") 
    completeLabel.textContent = "Project completed:"
    let completeInput = document.createElement("input")
    completeInput.type = "checkbox"
    completeInput.id = "complete"
    completeInput.name="complete"
    let submitButton = document.createElement("button");
    submitButton.classList.add("submit-project-button")
    submitButton.textContent = "Submit Project"

    // appending form elements and form
    projectForm.appendChild(titleLabel)
    projectForm.appendChild(titleInput)
    projectForm.appendChild(descLabel)
    projectForm.appendChild(descInput)
    projectForm.appendChild(dueByLabel)
    projectForm.appendChild(dueByInput)
    projectForm.appendChild(priorityLabel)
    projectForm.appendChild(priorityInput)
    projectForm.appendChild(completeLabel)
    projectForm.appendChild(completeInput)
    projectForm.appendChild(submitButton)
    contentDiv.appendChild(projectForm)


    let {refreshProjectList} = manageProjects()
    function createProject(e){
        let newProject = Project(`${titleInput.value}`,`${descInput.value}`,`${dueByInput.value}`,`${priorityInput.value}`,`${completeInput.checked}`);
        newProject.addProject(e)
        refreshProjectList()
        clearForm()
    }

    function clearForm(){
        projectForm.classList.toggle("project-form-hidden")
        titleInput.value = ''
        descInput.value=''
        dueByInput.value=''
        priorityInput.value = 1
        completeInput.checked = false
    }

    submitButton.addEventListener("click",createProject)
}

export default addProjectForm