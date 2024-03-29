
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

    static getProject(projectId){
        const toDoList = Storage.getTodoList();
        let project = toDoList.getProject(projectId);
        return project;
    }

    static addProject(project){
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectId){
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectId);
        Storage.saveTodoList(todoList);
    }


  static addTask(projectId, task) {
    console.log('added task');
    const todoList = Storage.getTodoList()
    let project = todoList.getProject(projectId)
    project.addTask(task);
    Storage.saveTodoList(todoList);
  }

  static editTask(projectId, task){
    const todoList = Storage.getTodoList();
    let project = todoList.getProject(projectId);
    project.editTask(task);
    Storage.saveTodoList(todoList);
  }
    
  static deleteTask(projectId, taskId) {
    const todoList = Storage.getTodoList()
    todoList.getProject(projectId).deleteTask(taskId)
    Storage.saveTodoList(todoList)
  }
}