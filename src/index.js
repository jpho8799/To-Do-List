import  Project from './modules/Project';
import './styles.css';
import { taskFactory } from './modules/Task';
import {initForms} from './modules/Form';
import Storage from './modules/Storage';
import {initNavBar} from './modules/NavBar'
import {v4 as uuid4} from 'uuid';

const deleteTask = document.querySelectorAll('.deleteTask');


deleteTask.forEach(button =>{
    button.addEventListener('click', ()=>{
        //add functionality to delete task from storage
        let taskContainer = button.parentElement.parentElement;
        taskContainer.remove();

    })
})

window.onload = ()=>{
    Storage.getTodoList();
    initForms();
    initNavBar();
    
}


