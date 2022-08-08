import { Project } from './modules/Project';
import './styles.css';
import { taskFactory } from './modules/Task';

const navbarIcon = document.querySelector("#navIcon");
const newprojectIcon = document.querySelector("#new-project");
const newtaskIcon = document.querySelector('#new-task');
const cancelButton = document.querySelectorAll(".cancel");

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

cancelButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        console.log("clicked");
        window.location.href = window.location.href;
        return false;
    })
})


/*

*/

const sampleTask = taskFactory("test", "10-9-2022", "high");
console.log(sampleTask);
console.log(sampleTask.getTitle());
sampleTask.setTitle("new task");
console.log(sampleTask.getTitle());
