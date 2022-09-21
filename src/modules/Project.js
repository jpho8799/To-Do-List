import {v4 as uuidv4} from 'uuid';
import { initTaskForm } from './Form';
import Task from './Task';


export default class Project {
    constructor(title){
        this.projectId = uuidv4().toString();
        this.title = title;
        this.tasks = [];

    }

    getId(){
        return this.projectId;
    }
    setTitle(title){
        this.title = title;

    }
    getTitle(){
        return this.title;
    }

    setTasks(tasks) {
        this.tasks = tasks
      }

    getTasks(){
        return this.tasks;
    }

    getTask(taskId){
        return this.tasks.find(task =>task.getId() == taskId)
    }

    addTask(newTask){
        //if(this.tasks.find((task)=> task.getId == newTask.getId)) return;
        this.tasks.push(newTask);
    }

    editTask(editedTask){
        let index = this.tasks.findIndex(task => task.getId() == editedTask.getId());
        this.tasks[index].setTitle(editedTask.getTitle());
        this.tasks[index].setdueDate(editedTask.getdueDate());
        this.tasks[index].setPriority(editedTask.getPriority());
        this.tasks[index].setStatus(editedTask.getStatus());
    }
    
    deleteTask(taskId){
        this.tasks = this.tasks.filter(task => task.getId() !== taskId);
    }

    
}