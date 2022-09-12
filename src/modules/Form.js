import Project from "./Project";
import Task from "./Task";
import Storage from "./Storage";
import TodDoList from "./TodoList";
import {updateNavBar} from "./NavBar";




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


function updateTaskForm(newProject, projectId){
    const projectSelection = document.getElementById('project-list');
    const projectTitle = newProject.getTitle();
    const newOption = document.createElement('option');
    newOption.setAttribute('data-UUID', projectId);
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

function initplusBtns(){

    const mainContent = document.querySelector('.main___content')
    const newprojectIcon = document.querySelector("#new-project");
    const newtaskIcon = document.querySelector('#new-task');
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.getElementById('taskForm');

    newprojectIcon.addEventListener('click', ()=>{
        const taskFormStyle = window.getComputedStyle(taskForm).display;
        if(taskFormStyle == 'none'){
            projectForm.style.display = 'flex';
            mainContent.classList.add('content---blur');
        }
    
    });

    newtaskIcon.addEventListener('click', ()=>{
        const projectFormStyle = window.getComputedStyle(projectForm).display;
        if(projectFormStyle == 'none'){
            taskForm.style.display = 'flex';
            mainContent.classList.add('content---blur');
        }
    
    
    })
}

function initFormBtns(){
    const mainContent = document.querySelector('.main___content')
    const projectFormButton = document.querySelector('#new-projectButton');
    const taskFormButton = document.querySelector('#new-taskButton');
    const cancelButton = document.querySelectorAll('.cancel');

    projectFormButton.addEventListener('click', ()=>{
        let projectForm = document.querySelector('.newproject___form');
        if(validateForm(projectForm)){
            const title = document.getElementById('project-title').value;
            //code for adding new project
            let newProject = new Project(title);
            let projectId = newProject.getId();
            Storage.addProject(newProject);
            updateTaskForm(newProject, projectId);
            updateNavBar(newProject);
            clearForm(projectForm);
            closeForm(projectForm);
            mainContent.classList.remove('content---blur');
        }

    })

    taskFormButton.addEventListener('click', ()=>{
        let taskForm = document.querySelector('.newtask___form');
        if(validateForm(taskForm)){
            const projectId = document.getElementById('project-list').value;
            const title = document.getElementById('task-title').value;
            const dueDate = document.getElementById('task-duedate').value;
            const priority = document.getElementById('task-priority').value;
            const status = document.getElementById('task-status').value;


            const newTask = new Task(title, dueDate, priority, status);

            Storage.addTask(projectId, newTask);


            
            clearForm(taskForm);
            closeForm(taskForm);
            mainContent.classList.remove('content---blur');
        };
    } )

    cancelButton.forEach(button =>{
        button.addEventListener('click', ()=>{
            window.location.href = window.location.href;
            return false;
        })
    })

}

function initForms(){
    initTaskForm();
    initplusBtns();
    initFormBtns();
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



export {initForms};