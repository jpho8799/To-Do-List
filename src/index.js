import './styles.css';

const navbarIcon = document.querySelector("#navIcon");
const newprojectIcon = document.querySelector("#new-project");
const newtaskIcon = document.querySelector('#new-task');

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







