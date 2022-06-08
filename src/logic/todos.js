let todos = []
let ID = 0
function manageTodos(){
    
    let addTodo = function(e){
        if(e){
            e.preventDefault()
        }
        this.id = ID
        console.log(this)
        todos = [...todos,this]
        console.log(todos)
        ID++
    }

    let refreshTaskList = function(){
        
        const contentDiv = document.querySelector(".content")
        let todoContainer = document.querySelector(".todo-container")
        
        let todoItem = document.createElement("div")
        let todoTitle = document.createElement("h2")
        let todoDueBy = document.createElement("p")
        todos.map(todo => {
            
            todoItem.classList.add(`todo`,`todo-${todo.id}`)
            todoTitle.textContent=`${todo.title}`
            todoDueBy.textContent=`${todo.dueBy}`
            todoItem.addEventListener("click",toggleComplete)
            
    
            todoContainer.appendChild(todoItem)
            todoItem.appendChild(todoTitle)
            todoItem.appendChild(todoDueBy)
            
        
        })
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(e){
        console.log(e)
        
        let allTaskItems = document.querySelectorAll(".todo")
        let allTasksToArray = [...allTaskItems]
        

        for(let i =0; i<todos.length; i++){
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1
            console.log(lastChar)
            if(todos[i].id === parseInt(split[lastChar])){
                this.classList.toggle('task-completed')
                todos[i].complete ? todos[i].complete = false : todos[i].complete = true
            }else{
                console.log("nowork")
                console.log(todos[i].id)
                console.log(lastChar)
            }
            console.log(todos)
        }
        // add linethrough and grey it out etc
        
        // current task set complete to true 
    }

    // let addTodoToProject = function(){
        
    // }

    let deleteTodo = function(){
        if(todos.length === 0){
            return
        }else{
            let updatedTodos = todos.filter((todo) => {
                // todo.id === e.target.id
            })
            // todos = updatedTodos;
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