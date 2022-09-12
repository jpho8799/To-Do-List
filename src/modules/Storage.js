
import Project from './Project'
import Task from './Task';
import TodoList from './TodoList'


export default class Storage {
    static saveTodoList(data){
        localStorage.setItem('storageId', JSON.stringify(data));
    }

    static getTodoList(){
        const todoList = Object.assign(
            new TodoList(),
            JSON.parse(localStorage.getItem('storageId'))
        )

        todoList.setProjects(
            todoList
            .getProjects()
            .map((project)=> Object.assign(new Project(), project))
        )

        todoList.getProjects()
        .forEach(project=>{
            project.setTasks(
                project.getTasks().map((task) => Object.assign(new Task(), task))
            )
        })

        return todoList;
    }

    static addProject(project){
        const todoList = Storage.getTodoList()
        todoList.addProject(project)
        console.log(todoList);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectId){
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectId);
        Storage.saveTodoList(todoList);
    }


  static addTask(projectId, task) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).addTask(task)
    console.log(todoList);
    Storage.saveTodoList(todoList)
  }
    
  static deleteTask(projectId, taskId) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).deleteTask(taskId)
    Storage.saveTodoList(todoList)
  }
}