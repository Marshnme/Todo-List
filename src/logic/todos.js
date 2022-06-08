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
    }

    let refreshTaskList = function(){
        const contentDiv = document.querySelector(".content")
        let todoContainer = document.querySelector(".todo-container")
        todoContainer.replaceChildren()
       
        todos.map(todo => {
            let todoItem = document.createElement("div")  
            let todoTitle = document.createElement("h2")
            let todoDueBy = document.createElement("p")
            let todoDelete = document.createElement("p")
            todoDelete.classList.add("delete-icon")
            
            todoItem.classList.add(`todo`,`todo-${todo.id}`)
            if(todo.complete === true){
                console.log("IM CHECKED")
                todoItem.classList.toggle("task-completed-background")
                todoTitle.classList.toggle("task-completed")
                todoDueBy.classList.toggle("task-completed")
            }
            todoTitle.textContent=`${todo.title}`
            todoDueBy.textContent=`${todo.dueBy}`
            todoDelete.textContent="DELETE"
            todoItem.addEventListener("click",toggleComplete)
            todoDelete.addEventListener("click",deleteTodo)
    
            todoContainer.appendChild(todoItem)
            todoItem.appendChild(todoTitle)
            todoItem.appendChild(todoDueBy)
            todoItem.appendChild(todoDelete)
        }) 
        
        contentDiv.appendChild(todoContainer)
    }

    let toggleComplete = function(e){
        console.log(e)
        for(let i = 0; i<todos.length; i++){
            let split = e.target.classList[1].split("")
            let lastChar = split.length - 1
            if(todos[i].id === parseInt(split[lastChar])){
                e.target.classList.toggle("task-completed-background")
                e.target.children[0].classList.toggle('task-completed')
                e.target.children[0].nextSibling.classList.toggle('task-completed')
                
                todos[i].complete ? todos[i].complete = false : todos[i].complete = true
            }else{
                console.log("nowork")
            }
        }
        console.log(todos)
    }


    let deleteTodo = function(e){
        console.log("deleteme okz")
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