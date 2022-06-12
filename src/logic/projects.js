 import Todo from "./todos"
 
 let projects = []
 let projectID = 0
 let taskID = 0
 let currentProj = null
 function manageProjects(){

    let addProject = function(e){
        if(e){
            e.preventDefault()
        }
        this.id = projectID
        projects = [...projects, this]
        console.log(projects)

        projectID++
        saveProjectsInLocalStorage()
    }

    let saveProjectsInLocalStorage = function(){
        window.localStorage.setItem("projects",JSON.stringify(projects))
        window.localStorage.setItem("id",projectID)
    }

    let getProjectsFromLocalStorage = function(){
        let savedProjects = JSON.parse(window.localStorage.getItem("projects"))

        if(savedProjects != null){
            let savedID = window.localStorage.getItem("id")
            projects = savedProjects
            if(projects.length === 0 ){
                projectID = 0
            }else{
                projectID = parseInt(savedID)
            }
        }else{
            return
        }
    }

    let refreshProjectList = function(){
        getProjectsFromLocalStorage()
        if(!projects){
            return
        }

        const contentDiv = document.querySelector(".content")
        let projectContainer = document.querySelector(".project-container")
        projectContainer.replaceChildren()

        projects.map(project => {
            let projectItem = document.createElement("div")  
            let projectDetails = document.createElement("div")
            projectDetails.classList.add("project-details")
            
            let projectTitle = document.createElement("h2")
            let projectDueBy = document.createElement("p")
            let projectDelete = document.createElement("p")
            projectDelete.classList.add("delete-icon")

            projectItem.classList.add(`project`,`project-${project.id}`)

            if(project.complete === true || project.complete === "true"){
                console.log("IM COMPLETE")
                projectItem.classList.add("project-completed-background")
                projectDetails.classList.add("project-completed")
            }else{
                console.log("i am not completed")
                projectItem.classList.remove("project-completed-background")
                projectDetails.classList.remove("project-completed")
            }

            projectTitle.textContent=`${project.title}`
            projectDueBy.textContent=`${project.dueBy}`
            projectDelete.textContent="DELETE"

            // add + under each project to trigger todoForm to add todo to project

            let addTodoButton = document.createElement("p")
            addTodoButton.textContent="+"

            projectItem.addEventListener("click",toggleComplete)
            projectDelete.addEventListener("click",deleteProject)
            addTodoButton.addEventListener("click",toggleTaskForm)

            projectContainer.appendChild(projectItem)
            projectItem.appendChild(projectDetails)
            projectDetails.appendChild(projectTitle)
            projectDetails.appendChild(projectDueBy)
            projectItem.appendChild(addTodoButton)
            projectItem.appendChild(projectDelete)
        })
        contentDiv.appendChild(projectContainer)
    }

    let toggleComplete = function(e){
        e.stopPropagation()
        console.log(e)

        for(let i = 0; i<projects.length;i++){
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1

            if(projects[i].id === parseInt(split[lastChar])){
                if(projects[i].complete === "true" || projects[i].complete === true){
                    
                    e.target.classList.remove("project-completed-background")
                    e.target.children[0].classList.remove('project-completed')
                    projects[i].complete = false;
                }else if(projects[i].complete === "false" || projects[i].complete === false){
                    e.target.classList.add("project-completed-background")
                    e.target.children[0].classList.add('project-completed')
                    projects[i].complete = true;
                }else{
                    console.log("nowork")
                }
                saveProjectsInLocalStorage()
            }
        }
        console.log(projects)
    }
    
    let toggleTaskForm = function(e){
        console.log(e)
        currentProj = e.target.parentElement
        console.log(currentProj)
        let taskForm = document.querySelector(".add-task-form")
        taskForm.classList.toggle("task-form-hidden")
        
    }
    // need to grab currently clicked project to add todo to 
    // try to use project.addtodotoproject
    let addTodoToProject = function(e){
        console.log("addTodoToproject",this)
        console.log(currentProj)
        this.id = taskID
        let split = currentProj.classList[1].split("")
        let currentProgID = split.length - 1
        console.log(split[currentProgID])
        for(let i=0; i<projects.length; i++){
            if(split[currentProgID] == this.id){
                console.log(projects[i])
                projects[i] = {...projects[i],tasks:this}
                console.log("project with task",projects[i])
            }
        }
    }

    let deleteProject = function(e){
        e.stopPropagation()
        if(projects.length === 0){
            return
        }else{
            let parentId = e.target.parentElement.classList[1].split("")
            console.log(parentId)
            let IdLastChar = parentId.length-1

            let updatedProjects = projects.filter(project => {
                if( project.id != parentId[IdLastChar]){
                    return project
                }
            })
            projects = updatedProjects;
            saveProjectsInLocalStorage()
            refreshProjectList()
        }
    }
    return {addProject,refreshProjectList,toggleComplete,deleteProject, addTodoToProject}
 }

 
 function Project(title,desc,dueBy,priority,complete){
    title
    desc
    dueBy
    priority
    complete

    let {addProject} = manageProjects()

    return { title,desc,dueBy,priority,complete,addProject}
}

export {Project, manageProjects,projects}