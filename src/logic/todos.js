
 function Todo(title,desc,dueBy,priority,complete){
    title
    desc
    dueBy
    priority
    complete

    let todos = []
    let addTodo = function(){
        todos.push(this)
    }
    let toggleComplete = function(){
        this.classList.toggle('complete')
    }

    let deleteTodo = function(){
        if(todos.length === 0){
            return
        }else{
            let updatedTodos = todos.filter((todo) => {
                // todo.id === e.target.id
            })
            todos = updatedTodos;
        }
    }
    return {addTodo,toggleComplete,deleteTodo}
}

export default Todo