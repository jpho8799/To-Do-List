import { Project, projectFactory } from './modules/Project';
import './styles.css';
import { taskFactory } from './modules/Task';
import { validateForm, clearForm, closeForm } from './modules/Form';
import { storageFactory } from './modules/Storage';

const mainContent = document.querySelector('.main___content')
const navbarIcon = document.querySelector('#navIcon');
const newprojectIcon = document.querySelector("#new-project");
const projectForm = document.getElementById('projectForm');
const taskForm = document.getElementById('taskForm');
const newtaskIcon = document.querySelector('#new-task');
const cancelButton = document.querySelectorAll('.cancel');
const deleteTask = document.querySelectorAll('.deleteTask');
const projectFormButton = document.querySelector('#new-projectButton');
const taskFormButton = document.querySelector('#new-taskButton');



//delete this later
const taskBody = document.querySelector('.tasks___body');

navbarIcon.addEventListener('click', ()=>{
    const navBar = document.querySelector('nav');
    
    if(navBar.classList.contains('navbar---toggleLtoR')){
        navBar.classList.remove('navbar---toggleLtoR');
        navBar.classList.add('navbar---toggleRtoL');

        mainContent.classList.remove('main---toggleLtoR');
        mainContent.classList.add('main---toggleRtoL')
    }else{
        navBar.classList.remove('navbar---toggleRtoL');
        navBar.classList.add('navbar---toggleLtoR');

        mainContent.classList.remove('main---toggleRtoL');
        mainContent.classList.add('main---toggleLtoR');
    }
});

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



projectFormButton.addEventListener('click', ()=>{
    let projectForm = document.querySelector('.newproject___form');
    if(validateForm(projectForm)){
        const projectTitle = document.getElementById('project-title').value;
        //code for adding new project
        let newProject = projectFactory(projectTitle);
        

        clearForm(projectForm);
        closeForm(projectForm);
        mainContent.classList.remove('content---blur');
    }

})

taskFormButton.addEventListener('click', ()=>{
    let taskForm = document.querySelector('.newtask___form');
    if(validateForm(taskForm)){
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

deleteTask.forEach(button =>{
    button.addEventListener('click', ()=>{
        let taskContainer = button.parentElement.parentElement;
        taskContainer.remove();
    })
})