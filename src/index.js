import { Project, projectFactory } from './modules/Project';
import './styles.css';
import { taskFactory } from './modules/Task';
import { validateNewProject, validateNewTask } from './modules/Form';
import { storageFactory } from './modules/Storage';

const navbarIcon = document.querySelector("#navIcon");
const newprojectIcon = document.querySelector("#new-project");
const newtaskIcon = document.querySelector('#new-task');
const cancelButton = document.querySelectorAll('.cancel');
const projectFormButton = document.querySelector('#new-projectButton');
const taskFormButton = document.querySelector('#new-taskButton');
//delete this later
const taskBody = document.querySelector('.tasks___body');

navbarIcon.addEventListener('click', ()=>{
    const navBar = document.querySelector('nav');
    
    if(navBar.classList.contains('navbar---toggleLtoR')){
        navBar.classList.remove('navbar---toggleLtoR');
        navBar.classList.add('navbar---toggleRtoL');
    }else{
        navBar.classList.remove('navbar---toggleRtoL');
        navBar.classList.add('navbar---toggleLtoR');
    }
});

newprojectIcon.addEventListener('click', ()=>{
    const projectForm = document.getElementById('projectForm');
    projectForm.style.display = 'flex';
});

newtaskIcon.addEventListener('click', ()=>{
    const taskForm = document.getElementById('taskForm');
    taskForm.style.display = 'flex';

})



projectFormButton.addEventListener('click', ()=>{
    let projectForm = document.querySelector('.newproject___form');
    validateNewProject(projectForm);

})

taskFormButton.addEventListener('click', ()=>{
    let taskForm = document.querySelector('newtask___form');
    validateNewTask(taskForm);
} )
const generateProjectSelectionList = ()=>{
   let pList = storageFactory.getprojectList();
    /*
   pList.forEach(project =>{
       console.log(project);
       
       const projectTitle = project.getprojectTitle();
       const newOption = document.createElement('option');
       newOption.textContent = projectTitle;
       newOption.value = project.getprojectId();
       projectSelection.appendChild(newOption);
       

   })
   */
}
cancelButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        window.location.href = window.location.href;
        return false;
    })
})

