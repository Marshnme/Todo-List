let todos = []

function manageTodos(){
    
    let addTodo = function(e){
        if(e){
            e.preventDefault()
        }
        console.log(this)
        todos = [...todos,this]
        console.log(todos)
    }

    let refreshTaskList = function(){
        
        const contentDiv = document.querySelector(".content")
        let todoContainer = document.querySelector(".todo-container")
        
        let todoItem = document.createElement("div")
        let todoTitle = document.createElement("h2")
        let todoDueBy = document.createElement("p")
        todos.map(todo => {
            
            todoItem.classList.add(`todo`,`todo-}`)
            todoTitle.textContent=`${todo.title}`
            todoDueBy.textContent=`${todo.dueBy}`
            
    
            todoContainer.appendChild(todoItem)
            todoItem.appendChild(todoTitle)
            todoItem.appendChild(todoDueBy)
            
        
        })
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(){
        // add linethrough and grey it out etc
        this.classList.toggle('complete')
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