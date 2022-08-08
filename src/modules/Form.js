import {projectFactory } from "./Project";
import { taskFactory } from "./Task";
import {storageFactory} from "./Storage";

function validateNewProject(){
    let projectTitle = document.forms["projectForm"]["project-title"].value;
    if(projectTitle == ""){
        alert("Please fill out all values");
        return false;
    }else{
      const newProject = projectFactory(projectTitle);
      storageFactory.addProject(newProject);
    }
}

function validateNewTask(){
    let title = document.forms['taskForm']['task-title'].value;
    let projectList = document.form['taskForm']['project-list'].value;
    let dueDate = document.form['taskForm']['task-duedate'].value;
    let priority = document.form['taskForm']['task-priority'].value;

    if(title == '' || projectList == '' || dueDate == '' || priority == ''){
        alert('Please fill out all values');
        return;
    }else{
        const newTask = taskFactory(title, dueDate, priority);
        const project = storageFactory.getProject(projectList);
        project.addTask(newTask);
        storageFactory.editStorage(project);
    }
}


export {validateNewProject, validateNewTask};