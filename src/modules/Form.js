import Project from "./Project";
import Task from "./Task";
import Storage from "./Storage";
import TodDoList from "./TodoList";
import {updateNavBar} from "./NavBar";
import {displayProject} from "./MainContent"




function validateForm(form){
    let formComplete = true;
    Array.from(form.elements).forEach(element=>{
        if(element.tagName == 'INPUT' || element.tagName == 'SELECT'){
            if(element.value <= 0){
                formComplete = false;
                invalidInput(element);
                
            }else{
                validInput(element);
            }
         }
        
    })

    return formComplete;
  
}


function updateTaskForm(newProject, projectId){
    const projectSelection = document.getElementById('project-list');
    const projectTitle = newProject.getTitle();
    const newOption = document.createElement('option');
    newOption.setAttribute('data-UUID', projectId);
    newOption.textContent = projectTitle;
    newOption.value = newProject.getId();
    projectSelection.appendChild(newOption);
    

}

function initTaskForm(){
    const projectSelection = document.getElementById('project-list');
    let toDoList = Storage.getTodoList();
    let projectList = toDoList.getProjects();
    
    
    projectList.forEach(project =>{
        const projectTitle = project.getTitle();
        const newOption = document.createElement('option');
        newOption.textContent = projectTitle;
        newOption.value = project.getId();
        projectSelection.appendChild(newOption);

    })
    
}


function createEditForm(projectId, taskId){
    let project = Storage.getProject(projectId);
    let task = project.getTask(taskId);

    const main = document.querySelector('main')
    let editForm = document.createElement('div');
    editForm.classList.add('newform');
    editForm.setAttribute('id', 'editForm');
    editForm.style.display = 'flex';
    editForm.innerHTML = `
    <form class = "newtask___form" name = "editForm" action= "">
        <p class = "form___heading text-formatting">
        Edit Task
        </p>
        <div class = "form___content flex___wrapper text-formatting">
            <label for="edit-title">Title(*)</label>
            <input required = "required" type="text" id="edit-title" name = "edit-title" value="${task.getTitle()}">
        </div>
        <div class = "form___content flex___wrapper text-formatting">
            <label for="edit-duedate">Due Date(*)</label>
            <input type="date" id="edit-duedate" name = "task-duedate" value = "${task.getdueDate()}">
        </div>
        <div class = "form___content flex___wrapper text-formatting">
            <label for="edit-priority">Priority(*)</label>
            <select required = "optional" name="edit-priority" id="edit-priority" value = "${task.getPriority()}">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div class="form___content flex___wrapper text-formatting">
            <label for="edit-status">Status(*)</label>
            <select name="edit-status" id="edit-status" value = "${task.getStatus()}">
                <option value="to-do">To-Do</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div> 

        <div class="button___container">
            <button class = "create" id = 'edit-taskButton' type = 'button'>Edit</button>
            <button  class = 'cancel' type = 'button' id = 'cancel-btn'>Cancel</button>
        </div>

    </form>
    `
   
    main.appendChild(editForm);

    let editBtn = document.getElementById('edit-taskButton')
    let cancelEditBtn = document.getElementById('cancel-btn');
    
    editBtn.addEventListener('click', ()=>{
        submitEdit(editForm.firstElementChild, projectId, task);
    })
    cancelEditBtn.addEventListener('click', ()=>{
        deleteEditForm(editForm);
    })



}

function submitEdit(editForm, projectId, task){
    if(validateForm(editForm)){
        const title = document.getElementById('edit-title').value;
        const dueDate = document.getElementById('edit-duedate').value;
        const priority = document.getElementById('edit-priority').value;
        const status = document.getElementById('edit-status').value;

        task.setTitle(title);
        task.setdueDate(dueDate);
        task.setPriority(priority);
        task.setStatus(status);
        console.log(task);
        Storage.editTask(projectId, task);
        
        deleteEditForm(editForm);
        displayProject(projectId);
    }
}


function deleteEditForm(editForm){
    const parentNode = editForm.parentNode;
    parentNode.removeChild(editForm);

    const mainContent = document.querySelector('.main___content')
    mainContent.classList.remove('content---blur');
}

function initplusBtns(){

    const mainContent = document.querySelector('.main___content')
    const newprojectIcon = document.querySelector("#new-project");
    const newtaskIcon = document.querySelector('#new-task');
    const projectForm = document.getElementById('projectForm');
    const taskForm = document.getElementById('taskForm');
    const editForm = document.getElementById('editForm');


    newprojectIcon.addEventListener('click', ()=>{
        const editForm = document.getElementById('editForm');
        const taskFormStyle = window.getComputedStyle(taskForm).display;
        if(taskFormStyle == 'none' && editForm === null){
            projectForm.style.display = 'flex';
            mainContent.classList.add('content---blur');
        }
    
    });

    newtaskIcon.addEventListener('click', ()=>{
        const editForm = document.getElementById('editForm')
        const projectFormStyle = window.getComputedStyle(projectForm).display;
        if(projectFormStyle == 'none' && editForm === null){
            taskForm.style.display = 'flex';
            mainContent.classList.add('content---blur');
        }
    
    
    })
}

function initFormBtns(){
    const mainContent = document.querySelector('.main___content')
    const projectFormButton = document.querySelector('#new-projectButton');
    const taskFormButton = document.querySelector('#new-taskButton');
    const cancelButton = document.querySelectorAll('.cancel');

    projectFormButton.addEventListener('click', ()=>{
        let projectForm = document.querySelector('.newproject___form');
        if(validateForm(projectForm)){
            const title = document.getElementById('project-title').value;
            //code for adding new project
            let newProject = new Project(title);
            let projectId = newProject.getId();
            Storage.addProject(newProject);
            updateTaskForm(newProject, projectId);
            updateNavBar(newProject);
            clearForm(projectForm);
            closeForm(projectForm);
            mainContent.classList.remove('content---blur');
        }

    })

    taskFormButton.addEventListener('click', ()=>{
        let taskForm = document.querySelector('.newtask___form');
        if(validateForm(taskForm)){
            const projectId = document.getElementById('project-list').value;
            const title = document.getElementById('task-title').value;
            const dueDate = document.getElementById('task-duedate').value;
            const priority = document.getElementById('task-priority').value;
            const status = document.getElementById('task-status').value;
            const newTask = new Task(title, dueDate, priority, status);
            Storage.addTask(projectId, newTask);
            displayProject(projectId);

            
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

}

function initForms(){
    initTaskForm();
    initplusBtns();
    initFormBtns();
}

function invalidInput(element){
    element.classList.add('invalid');
}

function validInput(element){
    element.classList.remove('invalid');
}

function clearForm(form){
    Array.from(form.elements).forEach(element =>{
        element.value = '';
    });
}

function closeForm(form){
    form.parentElement.style.display = 'none';
}



export {initForms, createEditForm};