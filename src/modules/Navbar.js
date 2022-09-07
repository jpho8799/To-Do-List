import Storage from "./Storage";
function initNavBar(){

        const navList = document.querySelector('.nav___list');
        let toDoList = Storage.getTodoList();
        let projectList = toDoList.getProjects();

        projectList.forEach(project=>{
            const projectTitle = project.getTitle();
            const projectId = project.getId();
            const liElement = document.createElement('li');
            liElement.innerHTML = 
            `<div id = "${projectId}"> ${projectTitle}</div>`;
            liElement.classList.add('navItem');
            navList.appendChild(liElement);
        })
}

function updateNavBar(newProject){
    const navList = document.querySelector('.nav___list');
    const projectTitle = newProject.getTitle();
    const projectId = newProject.getId();
    const liElement = document.createElement('li');
    liElement.innerHTML = 
    `<div id = "${projectId}"> ${projectTitle}</div>`;
    liElement.classList.add('navItem');
    navList.appendChild(liElement);
    
}

export{initNavBar, updateNavBar};

