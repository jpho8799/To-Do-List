import {v4 as uuidv4} from 'uuid';
import { taskFactory } from './Task';

const projectFactory = (projectTitle)=>{
    const taskList = [];
    let _projectId = uuidv4();
    let _projectTitle = projectTitle;
    const getprojectId = ()=> _projectId;
    const getprojectTitle = ()=> _projectTitle;
    const getTaskList = ()=>taskList;
    const getTask = (taskId) =>{
        return taskList.find((task) => task.getprojectId() == taskId)
    }

    const addTask = (task)=>{
        taskList.push(task);
    }

    const editProject = (editedTask)=>{
        taskList.forEach(task =>{
            if(task.getTaskId() == editedTask.getTaskId()){
                task = editedTask;
            }
        })

    }

    const deleteTask = (taskId)=>{
        taskList = taskList.filter( task => task.getTaskId() != taskId);
    }

    return {
       getprojectId, getprojectTitle, getTaskList, addTask, getTask, editProject, deleteTask
    }
}

export {projectFactory};
