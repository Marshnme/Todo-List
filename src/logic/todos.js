let todos = []
let ID = 0
function manageTodos(){
    
    let addTodo = function(e){
        if(e){
            e.preventDefault()
        }
        this.id = ID
        todos = [...todos,this]
        console.log(todos)
        ID++
        saveTasksInLocalStorage()
        
    }

    let saveTasksInLocalStorage = function(){
        window.localStorage.setItem("tasks",JSON.stringify(todos))
        window.localStorage.setItem("id",ID)
    }
    let getTasksFromLocalStorage = function(){
        let savedTasks = JSON.parse(window.localStorage.getItem("tasks"))

        if(savedTasks != null){
            let savedID = window.localStorage.getItem("id")
            todos = savedTasks
            if(todos.length === 0 ){
                ID = 0
            }else{
                ID = parseInt(savedID)
            }
        }else{
            return
        }
    }

    let refreshTaskList = function(){
        getTasksFromLocalStorage()
        if(!todos){
            return
        }
        const contentDiv = document.querySelector(".content")
        let todoContainer = document.querySelector(".todo-container")
        todoContainer.replaceChildren()
       
        todos.map(todo => {
            console.log(todo)
            let taskItem = document.createElement("div") 
            let taskDetails = document.createElement("div")
            taskDetails.classList.add("task-details")
             
            let taskTitle = document.createElement("h2")
            let taskDueBy = document.createElement("p")
            let taskDelete = document.createElement("p")
            taskDelete.classList.add("delete-icon")
            
            taskItem.classList.add(`todo`,`todo-${todo.id}`)
            if(todo.complete === true || todo.complete === "true"){
                console.log("IM COMPLETE")
                taskItem.classList.add("task-completed-background")
                taskDetails.classList.add("task-completed")
                // taskDueBy.classList.toggle("task-completed")
            }else{
                console.log("i am not completed")
                taskItem.classList.remove("task-completed-background")
                taskDetails.classList.remove("task-completed")
            }
            taskTitle.textContent=`${todo.title}`
            taskDueBy.textContent=`${todo.dueBy}`
            taskDelete.textContent="DELETE"
            taskItem.addEventListener("click",toggleComplete)
            taskDelete.addEventListener("click",deleteTodo)
    
            todoContainer.appendChild(taskItem)
            taskItem.appendChild(taskDetails)
            taskDetails.appendChild(taskTitle)
            taskDetails.appendChild(taskDueBy)
            taskItem.appendChild(taskDelete)
        }) 
        
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(e){
        e.stopPropagation()
        console.log(e)
        for(let i = 0; i<todos.length; i++){
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1
            if(todos[i].id=== parseInt(split[lastChar])){
                if(todos[i].complete === "true" || todos[i].complete === true){
                    
                    e.target.classList.remove("task-completed-background")
                    e.target.children[0].classList.remove('task-completed')
                    todos[i].complete = false;
                }else if(todos[i].complete === "false" || todos[i].complete === false){
                    e.target.classList.add("task-completed-background")
                    e.target.children[0].classList.add('task-completed')
                    todos[i].complete = true;
                }
               
                
                // todos[i].complete ? todos[i].complete = false : todos[i].complete = true
            }else{
                console.log("nowork")
            }
            saveTasksInLocalStorage()
        }
        console.log(todos)
        
    }


    let deleteTodo = function(e){
        e.stopPropagation()
        console.log(e)
        if(todos.length === 0){
            return
        }else{
            let parentId = e.target.parentElement.classList[1].split("")
            console.log(parentId)
            let IdLastChar = parentId.length-1
            
            let updatedTodos = todos.filter((todo) => {
                console.log(parentId[IdLastChar])
            console.log(todo.id)
               if( todo.id != parentId[IdLastChar]){
                   return todo
               }
            })
            todos = updatedTodos;
            saveTasksInLocalStorage()
            refreshTaskList()
        }
    }
    return {addTodo,toggleComplete,deleteTodo,refreshTaskList}
}

// Todo Factory
 function Todo(title,desc,dueBy,priority,complete){

        title,
        desc,
        dueBy,
        priority,
        complete

    let {addTodo} = manageTodos();

    return {title,desc,dueBy,priority,complete,addTodo}
}

export {Todo, manageTodos,todos,}