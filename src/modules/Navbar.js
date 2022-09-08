import Storage from "./Storage";
import {displayProject} from "./MainContent"


function initNavBar(){

        const navList = document.querySelector('.nav___list');
        let toDoList = Storage.getTodoList();
        let projectList = toDoList.getProjects();

        projectList.forEach(project=>{
            const projectTitle = project.getTitle();
            const projectId = project.getId();
            const liElement = document.createElement('li');
            liElement.textContent = projectTitle;
            liElement.setAttribute('data-UUID', projectId);
            liElement.setAttribute('class', 'navItem');
            liElement.addEventListener('click', ()=>{
                
                displayProject(liElement.data-UUID);
            });
            navList.appendChild(liElement);
        })
}

function updateNavBar(newProject){
    const navList = document.querySelector('.nav___list');
    const projectTitle = newProject.getTitle();
    const projectId = newProject.getId();
    const liElement = document.createElement('li');
    liElement.textContent = projectTitle;
    liElement.setAttribute('data-UUID', projectId);
    liElement.setAttribute('class', 'navItem');

    let dataId = liElement.getAttribute('data-UUID')
    navList.appendChild(liElement);
    liElement.addEventListener('click', ()=>{
        displayProject(dataId);
    }
        
    )
}


export{initNavBar, updateNavBar};

