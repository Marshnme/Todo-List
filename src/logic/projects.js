 let projects = []
 let projectID = 0
 function manageProjects(){

    let addProject = function(e){
        if(e){
            e.preventDefault()
        }
        this.id = projectID
        projects = [...projects, this]
        console.log(projects)

        projectID++
    }

    let refreshProjectList = function(){
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

            projectItem.addEventListener("click",toggleComplete)
            // projectDelete.addEventListener("click",deleteProject)
    
            projectContainer.appendChild(projectItem)
            projectItem.appendChild(projectDetails)
            projectDetails.appendChild(projectTitle)
            projectDetails.appendChild(projectDueBy)
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
                // save to local storage
            }
        }
        console.log(projects)
    }

    // let addTaskToProject = function(){
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