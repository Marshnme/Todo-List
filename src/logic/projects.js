
 function Project(title,desc,dueBy,priority,complete){
    title
    desc
    dueBy
    priority
    complete

    let projects = []
    let addProject = function(){
        projects.push(this)
    }
    let toggleComplete = function(){
        this.classList.toggle('complete')
    }

    let deleteProject = function(){
        if(projects.length === 0){
            return
        }else{
            let updatedProjects = projects.filter((project) => {
                // project.id === e.target.id
            })
            projects = updatedProjects;
        }
    }
    return {addProject,toggleComplete,deleteProject}
}

export default Project