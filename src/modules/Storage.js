import {v4 as uuidv4} from 'uuid'
import { projectFactory } from './Project';
const storageFactory = (()=>{
    const storageId = uuidv4();
    const projectList = [];
    const addProject = (project)=>{
        projectList.add(project);
        localStorage.setItem(storageId, JSON.stringify(projectList));
    }
    const editStorage = (editedProject)=>{
        projectList = JSON.parse(localStorage.getItem(storageId));
        projectList.forEach(project => {
            if(project.getprojectId()== editedProject.getprojectId()){
                project = editedProject;
            }
        })
        localStorage.setItem(storageId, JSON.stringify(projectList));
    }
    const getProject = (projectId) => {
        return projectList.filter((project) => project.getprojectId() == projectId)
    }
    const deleteProject = (projectId)=> {
        projectList.forEach(project => project.getprojectId() != projectId);
        localStorage.setItem(storageId, JSON.stringify(projectList));
    }
    const clearStorage = ()=>{
        localStorage.clear();
    }
    return {
        projectList, addProject, editStorage, getProject, deleteProject, clearStorage
    }
})();

export {storageFactory}