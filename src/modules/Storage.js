import {v4 as uuidv4} from 'uuid'
import { projectFactory } from './Project';

const projectList = [];
const storageFactory = (()=>{
    let storageId = 'storageKey';
    const initProjectList = ()=>{
        projectList = JSON.parse(localStorage.getItem(storageId));
    }
    const addProject = (project)=>{
        
        projectList.push(project);
        localStorage.setItem(storageId, JSON.stringify(pList));
    }
    
    const getProject = (projectId) => {
    
        return projectList.find((project) => project.getprojectId() == projectId)
    }
    const deleteProject = (projectId)=> {
    
        projectList.forEach(project => project.getprojectId() != projectId);
        localStorage.setItem(storageId, JSON.stringify(pList));
    }

    const editStorage = (editedProject)=>{
       
        projectList.forEach(project => {
            if(project.getprojectId()== editedProject.getprojectId()){
                project = editedProject;
            }
        })
        localStorage.setItem(storageId, JSON.stringify(projectList));
    }

    const clearStorage = ()=>{
        localStorage.clear();
    }
    return {
       initProjectList, addProject, editStorage, getProject, deleteProject, clearStorage
    }
})();

export {storageFactory}