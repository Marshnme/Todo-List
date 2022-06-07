    let todos = []
function manageTodos(){
    
    let addTodo = function(){
        todos = [...todos,{title:this.title,desc:this.desc,dueBy:this.dueBy,priority:this.priority,complete:this.complete}]
        console.log(todos)
        
    }
    let toggleComplete = function(){
        this.classList.toggle('complete')
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

export default Todo