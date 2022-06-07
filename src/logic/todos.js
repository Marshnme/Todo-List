
 function Todo(title,desc,dueBy,priority){
    title
    desc
    dueBy
    priority

    let todos = []

    let toggleComplete = function(){
        this.classList.toggle('complete')
    }
    let deleteTodo = function(){
        if(todos.length === 0){
            return
        }else{
            let updatedTodos = todos.filter((todo) => {

            })
        }
    }
    return {toggleComplete,deleteTodo}
}

export default Todo