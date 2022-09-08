function getProjectList(projectId){
    let toDoList = Storage.getTodoList();
    let projectList = toDoList.getProjects();
    let project = projectList.find(project =>project.getId()== projectId);
    return project;
}

function toDo(projectId){
    let project = getProjectList(projectId);
    let taskList = project.getTasks();
    return todoSection = taskList.filter(task =>{
        task.getStatus === 'To-Do';
    })
    

}

function inProgress(projectId){
    let project = getProjectList(projectId);
    let taskList = project.getTasks();
    return todoSection = taskList.filter(task =>{
        task.getStatus === 'In-Progress';
    })
}

function completed(projectId){
    let project = getProjectList(projectId);
    let taskList = project.getTasks();
    return todoSection = taskList.filter(task =>{
        task.getStatus === 'Completed';
    })
}

function createTaskElement(task){
    let taskItem = document.createElement('section');
    taskItem.setAttribute('class', 'task___list');
    taskItem.innerHTML = `
    <div class="task___item">
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

function editTaskItem(taskElement, task){

}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function clearProject(){
    const toDo = document.getElementsByTagName('to-do');
    const inProgress = document.getElementsByTagName('in-progress');
    const completed = document.getElementsByTagName('completed');

    removeAllChildNodes(toDo);
    removeAllChildNodes(inProgress);
    removeAllChildNodes(completed);
}

function displayProject(projectId){
    const toDoSection = document.getElementsByTagName('to-do');
    const inProgressSection = document.getElementsByTagName('in-progress');
    const completedSection = document.getElementsByTagName('completed');

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