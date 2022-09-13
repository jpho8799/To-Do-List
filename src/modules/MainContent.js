import Storage from './Storage'

function getProjectList(projectId){
    let toDoList = Storage.getTodoList();
    let projectList = toDoList.getProjects();
    let project = projectList.find(project =>project.getId()== projectId);
    return project;
}

function toDo(projectId){
    let project = getProjectList(projectId);

    console.log(project);
    let taskList = project.getTasks();
    console.log(taskList);
    let toDo =  taskList.filter(task =>task.getStatus() == 'to-do');
    console.log(toDo);
    return toDo;
    

}

function inProgress(projectId){
    let project = getProjectList(projectId);
    let taskList = project.getTasks();
    return taskList.filter(task =>task.getStatus() == 'in-progress')
}

function completed(projectId){
    let project = getProjectList(projectId);
    let taskList = project.getTasks();
    return taskList.filter(task =>task.getStatus() === 'completed');
    
}

function createTaskElement(task){
    let taskItem = document.createElement('section');
    taskItem.setAttribute('class', 'task___list');
    taskItem.innerHTML = `
    <div class="task___item" id = ${task.getId()}>
        <p class = 'taskTitle'>${task.getTitle()}</p>
        <p class = 'taskDueDate'>Due Date: ${task.getdueDate()}</p>
        <p class = 'taskPriorty'>Priority: ${task.getPriority()}</p>
        <div class="taskButtons">
            <div class="editTask">
            <i class = "fa-solid fa-pen-to-square"></i>
            </div>
            <div class="deleteTask">
            <i class = "fa-solid fa-trash-can"></i>
            </div>
        </div>
    </div>

    `

    return taskItem;
}

function editTask(){

}
function editTaskItem(taskElement, task){

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearProject(){
    const toDo = document.getElementById('to-do');
    const inProgress = document.getElementById('in-progress');
    const completed = document.getElementById('completed');

    removeAllChildNodes(toDo);
    removeAllChildNodes(inProgress);
    removeAllChildNodes(completed);
}

function displayProject(projectId){
    const toDoSection = document.getElementById('to-do');
    const inProgressSection = document.getElementById('in-progress');
    const completedSection = document.getElementById('completed');

    clearProject();

    
    let toDoList = toDo(projectId);
    let inProgressList = inProgress(projectId);
    let completeList = completed(projectId);

    displaySection(toDoSection, toDoList);
    displaySection(inProgressSection, inProgressList);
    displaySection(completedSection, completeList);

    

}

function displaySection(section, sectionList){
    sectionList.forEach(task =>{
        let taskElement = createTaskElement(task);
        section.appendChild(taskElement);
    })
}

export {displayProject}