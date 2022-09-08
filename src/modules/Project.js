import {v4 as uuidv4} from 'uuid';
import { initTaskForm } from './Form';
import Task from './Task';


export default class Project {
    constructor(title){
        this.uuidv4 = uuidv4();
        this.title = title;
        this.tasks = [];

    }

    getId(){
        return this.uuidv4.toString();
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
        return this.tasks.find(task =>{
            task.getId() == taskId;
        })
    }

    addTask(newTask){
        if(this.tasks.find((task)=> task.getId == newTask.getId)) return;
        this.tasks.push(newTask);
    }

    editTask(editedTask){
        this.tasks.find(task =>{
            if(task.getId == editedTask.getId){
                task.setTitle(editedTask.getTitle());
                task.setdueDate(editedTask.getdueDate());
                task.setPriority(editedTask.getPriority());
                task.setStatus(editedTask.getStatus());
            }
        })
    }
    deletetask(taskId){
        this.tasks = this.tasks.filter(task => task.getId !== taskId);
    }

    
}