 let projects = []

 function manageProjects(){

    let addProject = function(){
        projects = [...projects, this]
        console.log(projects)
    }

    let refreshProjectList = function(){
        if(!projects){
            return
        }

        const contentDiv = document.querySelector(".content")
        let projectContainer = document.querySelector(".project-container")
        projectContainer.replaceChildren()

        projects.map(project => {
            let projectDetails = document.createElement("div")
            projectDetails.classList.add("project-details")
            let projectItem = document.createElement("div")  
            let projectTitle = document.createElement("h2")
            let projectDueBy = document.createElement("p")
            let projectDelete = document.createElement("p")
            projectDelete.classList.add("delete-icon")

            projectItem.classList.add(`project`,`project-`)

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

            // projectItem.addEventListener("click",toggleComplete)
            // projectDelete.addEventListener("click",deleteProject)
    
            projectContainer.appendChild(projectItem)
            projectItem.appendChild(projectDetails)
            projectDetails.appendChild(projectTitle)
            projectDetails.appendChild(projectDueBy)
            projectItem.appendChild(projectDelete)
        })
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(){
        this.classList.toggle('complete')
    }

    // let addTodoProject = function(){
    //     // click on project 
    //     // brings up todos
    // }

    let deleteProject = function(){
        if(projects.length === 0){
            return
        }else{
            let updatedProjects = projects.filter((project) => {
                // project.id === e.target.id
            })
            // projects = updatedProjects;
        }
    }
    return {addProject,refreshProjectList,toggleComplete,deleteProject}
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