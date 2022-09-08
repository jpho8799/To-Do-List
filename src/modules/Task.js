
import {v4 as uuidv4} from 'uuid';

export default class Task {
    constructor(title, dueDate = 'No Date', priority = 'low', status = 'to-do'){
        this.uuidv4 = uuidv4();
        this.title = title; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;


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

    getdueDate(){
        return this.dueDate;
    }

    setdueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setStatus(status){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }

    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
}