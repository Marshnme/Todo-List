let todos = []

function manageTodos(){
    
    let addTodo = function(){
        todos = [...todos,this]
        console.log(todos)
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
    return {addTodo,toggleComplete,deleteTodo}
}


 function Todo(title,desc,dueBy,priority,complete){
    
        title,
        desc,
        dueBy,
        priority,
        complete
    
    let {addTodo} = manageTodos();
    
    return {title,desc,dueBy,priority,complete,addTodo}
}

export {Todo, manageTodos,todos}