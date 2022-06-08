import sideNav from "./components/sideNav"
import {Todo,manageTodos} from "./logic/todos";
import Projects from "./logic/projects";
import tasksDisplay from "./components/tasksDisplay"
import addTaskForm from "./components/addTaskForm";

let {refreshTaskList} = manageTodos()

let body = document.querySelector("body")
const contentDiv = document.createElement("div")
contentDiv.classList.add("content")
body.appendChild(contentDiv)

let todoOne = Todo("Clean Room","I was gonna grab the broom","tomorrow",5,true)
todoOne.addTodo()

let todoTwo = Todo("code","I was gonna grab the computer","todaymorrow",1,false)
todoTwo.addTodo()

let todoThree = Todo("work","work","work",1,false)
todoThree.addTodo()

// todo


    // single page app
    // home screen will have inputs for adding todos and projects that will hold todos. Choose which project your todo goes into
    // Factories to create todos and projects
    // todos will have title,desc,duedate,priority.....etc
    // Keep logic seperated and Dom related stuff seperate.
    // interface should be able to view all projects,view all todays in each project,expand a single todo to see/edit its details,and delete a todo.
    // checkout date-fns package 
    // use local storage to keep the session of the user

    

// SOFTWARE DESIGN
    // Modules to show interface 
    // factory to create todos
    // factory to create projects
    // 


    const renderDisplays = () =>{
        sideNav()
        addTaskForm()
        tasksDisplay()
        
    }
    
    renderDisplays()