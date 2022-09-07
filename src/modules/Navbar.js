import Storage from "./Storage";
function initNavBar(){

        const navList = document.querySelector('.nav___list');
        let toDoList = Storage.getTodoList();
        let projectList = toDoList.getProjects();

        projectList.forEach(project=>{
            const projectTitle = project.getTitle();
            const projectId = project.getId();
            console.log(projectId);
            const liElement = document.createElement('li');
            liElement.textContent = projectTitle;
            liElement.setAttribute('id', projectId);
            liElement.setAttribute('class', 'navItem');
            liElement.addEventListener('click', ()=>{
                displayProject(projectId);
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
    liElement.setAttribute('id', projectId);
    liElement.setAttribute('class', 'navItem');

    navList.appendChild(liElement);
    liElement.addEventListener('click', ()=>{
        displayProject(projectId);
    }
        
    )
}

function displayProject(content){
    console.log(content);
}

export{initNavBar, updateNavBar};

