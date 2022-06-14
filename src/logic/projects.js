import Todo from "./todos"

let projects = []
let projectID = 0
let taskID = 0
let currentProj = null
function manageProjects() {

    let addProject = function (e) {
        if (e) {
            e.preventDefault()
        }
        this.id = projectID
        projects = [...projects, this]
        console.log(projects)

        projectID++
        saveProjectsInLocalStorage()
    }

    let saveProjectsInLocalStorage = function () {
        window.localStorage.setItem("projects", JSON.stringify(projects))
        window.localStorage.setItem("id", projectID)
        window.localStorage.setItem("taskID", taskID)
    }

    let getProjectsFromLocalStorage = function () {
        let savedProjects = JSON.parse(window.localStorage.getItem("projects"))

        if (savedProjects != null) {
            let savedID = window.localStorage.getItem("id")
            projects = savedProjects
            let savedTaskID = window.localStorage.getItem("taskID")
            if (projects.length === 0) {
                projectID = 0
                taskID = 0
            } else {

                projectID = parseInt(savedID)
                taskID = parseInt(savedTaskID)
            }
        } else {
            return
        }
    }

    let refreshProjectList = function () {
        getProjectsFromLocalStorage()
        if (!projects) {
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

            projectItem.classList.add(`project`, `project-${project.id}`)

            if (project.complete === true || project.complete === "true") {
                console.log("IM COMPLETE")
                projectItem.classList.add("project-completed-background")
                projectDetails.classList.add("project-completed")
            } else {
                console.log("i am not completed")
                projectItem.classList.remove("project-completed-background")
                projectDetails.classList.remove("project-completed")
            }

            projectTitle.textContent = `${project.title}`
            projectDueBy.textContent = `${project.dueBy}`
            projectDelete.textContent = "DELETE"

            // add + under each project to trigger todoForm to add todo to project

            let addTodoButton = document.createElement("p")
            addTodoButton.classList.add("add-todo-icon")
            addTodoButton.textContent = "+"



            projectItem.addEventListener("click", toggleComplete)
            projectDelete.addEventListener("click", deleteProject)
            addTodoButton.addEventListener("click", toggleTaskForm)

            projectContainer.appendChild(projectItem)
            projectItem.appendChild(projectDetails)
            projectDetails.appendChild(projectTitle)
            projectDetails.appendChild(projectDueBy)
            projectItem.appendChild(addTodoButton)
            projectItem.appendChild(projectDelete)
            let todoDetails = document.createElement("div")

            if (project.tasks.length > 0) {
                project.tasks.map(task => {
                    let todoDetailsTry = document.createElement("div")
                    todoDetailsTry.classList.add(`${task.id}`)
                    todoDetails.classList.add(`todo-details`)
                    let todoTitle = document.createElement("p")
                    todoTitle.textContent = `${task.title}`
                    let todoDueby = document.createElement("p")
                    todoDueby.textContent = `${task.dueBy}`
                    let todoDelete = document.createElement("p")
                    todoDelete.textContent = "DELETE"
                    todoDelete.classList.add("todo-delete")



                    todoDetailsTry.appendChild(todoTitle)
                    todoDetailsTry.appendChild(todoDueby)
                    todoDetailsTry.appendChild(todoDelete)
                    todoDetails.appendChild(todoDetailsTry)
                    projectItem.appendChild(todoDetails)

                    if (task.complete == true || task.complete == "true") {

                        todoDetailsTry.classList.add("todo-try-complete-background")
                        todoDetailsTry.children[0].classList.add("todo-try-complete")
                    }

                    
                    todoDelete.addEventListener('click', deleteTodo)
                })
            }todoDetails.addEventListener('click', toggleTodoComplete)
        })
        contentDiv.appendChild(projectContainer)    
    }

    let toggleTodoComplete = function (e) {
        e.stopPropagation()
        console.log("todoCOMplete",e)
        let proClass = e.target.parentElement.parentElement.classList[1].split("")
        let proID = proClass.length - 1

        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id == parseInt(proClass[proID])) {
                console.log("meting this")
                for (let j = 0; j < projects[i].tasks.length; j++) {
                    console.log("AAAH",projects[i].tasks[j])
                    if (projects[i].tasks[j].complete === true || projects[i].tasks[j].complete === "true") {
                        projects[i].tasks[j].complete = false
                        e.target.classList.remove("todo-try-complete-background")
                        e.target.children[0].classList.remove("todo-try-complete")
                        console.log("hello",projects[i].tasks[j])
                    } else if (projects[i].tasks[j].complete === false || projects[i].tasks[j].complete === "false") {
                        projects[i].tasks[j].complete = true
                        e.target.classList.add("todo-try-complete-background")
                        e.target.children[0].classList.add("todo-try-complete")
                        console.log("hello",projects[i].tasks[j])
                    }
                    console.log("hello",projects[i].tasks[j])
                    saveProjectsInLocalStorage()
                }

            }
        }
    }

    let toggleComplete = function (e) {
        e.stopPropagation()
        // console.log(e)

        for (let i = 0; i < projects.length; i++) {
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1

            if (projects[i].id === parseInt(split[lastChar])) {
                if (projects[i].complete === "true" || projects[i].complete === true) {

                    e.target.classList.remove("project-completed-background")
                    e.target.children[0].classList.remove('project-completed')
                    projects[i].complete = false;
                } else if (projects[i].complete === "false" || projects[i].complete === false) {
                    e.target.classList.add("project-completed-background")
                    e.target.children[0].classList.add('project-completed')
                    projects[i].complete = true;
                } else {
                    console.log("nowork")
                }
                saveProjectsInLocalStorage()
            }
        }
        // console.log(projects)
    }

    let toggleTaskForm = function (e) {

        currentProj = e.target.parentElement

        let taskForm = document.querySelector(".add-task-form")
        taskForm.classList.toggle("task-form-hidden")

    }
    // need to grab currently clicked project to add todo to 
    // try to use project.addtodotoproject
    let addTodoToProject = function (e) {

        this.id = taskID
        let split = currentProj.classList[1].split("")
        let currentProgID = split.length - 1
        taskID++


        for (let i = 0; i < projects.length; i++) {
            if (split[currentProgID] == projects[i].id) {
                projects[i].tasks = [...projects[i].tasks, this]
                console.log("project with task", projects[i])
            }
        }
        saveProjectsInLocalStorage()
    }

    let deleteTodo = function (e) {
        if (e) {
            let eClass = e.target.parentElement.classList[0].split("")
            let eID = eClass.length - 1

            let projectContain = e.target.parentElement.parentElement.parentElement.classList[1].split("")
            let projectContainID = projectContain.length - 1

            for (let i = 0; i < projects.length; i++) {
                if (projects[i].id == projectContain[projectContainID]) {
                    for (let j = 0; j < projects[i].tasks.length; j++) {
                        let newTasks = projects[i].tasks.filter(task => {
                            return task.id != eClass[eID]
                        })

                        projects[i].tasks = newTasks;
                        saveProjectsInLocalStorage()
                        refreshProjectList()
                    }


                }

            }

        }

    }

    let deleteProject = function (e) {
        e.stopPropagation()
        if (projects.length === 0) {
            return
        } else {
            let parentId = e.target.parentElement.classList[1].split("")

            let IdLastChar = parentId.length - 1

            let updatedProjects = projects.filter(project => {
                if (project.id != parentId[IdLastChar]) {
                    return project
                }
            })
            projects = updatedProjects;
            saveProjectsInLocalStorage()
            refreshProjectList()
        }
    }
    return { addProject, refreshProjectList, toggleComplete, deleteProject, addTodoToProject }
}


function Project(title, desc, dueBy, priority, complete, tasks) {
    title
    desc
    dueBy
    priority
    complete
    tasks = []

    let { addProject } = manageProjects()

    return { title, desc, dueBy, priority, complete, tasks, addProject }
}

export { Project, manageProjects, projects }