import {Project } from "./Project";

function validateNewProject(){
    let projectTitle = document.forms["projectForm"]["project-title"].value;
    if(projectTitle == ""){
        alert("Please fill out all values");
        return false;
    }else{
       let newProject = new Project(projectTitle);
       console.log(newProject);
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
        //createTask(projectList,title,dueDate,priority);
    }
}


export {validateNewProject, validateNewTask};