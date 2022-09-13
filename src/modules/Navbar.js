import Storage from "./Storage";
import {displayProject} from "./MainContent"


function initNavBarFunction(){
    const navbarIcon = document.querySelector('#navIcon');
    const mainContent = document.querySelector('.main___content')

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
}

function initNavBarItem(){
    const navList = document.querySelector('.nav___list');
        let toDoList = Storage.getTodoList();
        let projectList = toDoList.getProjects();

        projectList.forEach(project=>{
            const projectTitle = project.getTitle();
            const projectId = project.getId();
            const liElement = document.createElement('li');
            liElement.textContent = projectTitle;
            liElement.setAttribute('data-UUID', projectId);
            liElement.setAttribute('class', 'nav___item');
            liElement.addEventListener('click', ()=>{
                displayProject(liElement.getAttribute('data-UUID'));
            });
            navList.appendChild(liElement);
        })
}

function initNavBar(){
    initNavBarFunction();
    initNavBarItem();

}
function updateNavBar(newProject){
    const navList = document.querySelector('.nav___list');
    const projectTitle = newProject.getTitle();
    const projectId = newProject.getId();
    const liElement = document.createElement('li');
    liElement.textContent = projectTitle;
    liElement.setAttribute('data-UUID', projectId);
    liElement.setAttribute('class', 'nav___item');

    let dataId = liElement.getAttribute('data-UUID')
    navList.appendChild(liElement);
    liElement.addEventListener('click', ()=>{
        displayProject(dataId);
    }
        
    )
}


export{initNavBar, updateNavBar};

