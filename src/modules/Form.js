import {getTitle, getId} from "./Project";
import { taskFactory } from "./Task";
import Storage from "./Storage";
import TodDoList from "./TodoList";



function validateForm(form){
    let formComplete = true;
    Array.from(form.elements).forEach(element=>{
        if(element.tagName == 'INPUT' || element.tagName == 'SELECT'){
            if(element.value <= 0){
                formComplete = false;
                invalidInput(element);
                
            }else{
                validInput(element);
            }
         }
        
    })

    return formComplete;
  
}


function updateTaskForm(newProject){
    const projectSelection = document.getElementById('project-list');
    const projectTitle = newProject.getTitle();
    const newOption = document.createElement('option');
    newOption.textContent = projectTitle;
    newOption.value = newProject.getId();
    projectSelection.appendChild(newOption);
    

}

function initTaskForm(){
    const projectSelection = document.getElementById('project-list');
    let toDoList = Storage.getTodoList();
    let projectList = toDoList.getProjects();
    
    
    projectList.forEach(project =>{
        const projectTitle = project.getTitle();
        const newOption = document.createElement('option');
        newOption.textContent = projectTitle;
        newOption.value = project.getId();
        projectSelection.appendChild(newOption);

    })
    
}

function invalidInput(element){
    element.classList.add('invalid');
}

function validInput(element){
    element.classList.remove('invalid');
}

function clearForm(form){
    Array.from(form.elements).forEach(element =>{
        element.value = '';
    });
}

function closeForm(form){
    form.parentElement.style.display = 'none';
}



export {validateForm, updateTaskForm, initTaskForm, clearForm, closeForm};