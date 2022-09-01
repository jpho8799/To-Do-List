import {v4 as uuidv4} from 'uuid'
import { projectFactory } from './Project';


const storageFactory = (()=>{
    let storageId = 'storageKey';
    let getprojectList = ()=>{
        if(localStorage.getItem(storageId) == null){
            return [];
        }else{
            return JSON.parse(localStorage.getItem(storageId));
        }
    }
    const addProject = (project)=>{
        let pList = getprojectList();
        console.log(pList);
        pList.push(project);
        localStorage.setItem(storageId, JSON.stringify(pList));
    }
    const editStorage = (editedProject)=>{
        let projectList = JSON.parse(localStorage.getItem(storageId));
        projectList.forEach(project => {
            if(project.getprojectId()== editedProject.getprojectId()){
                project = editedProject;
            }
        })
        localStorage.setItem(storageId, JSON.stringify(projectList));
    }
    const getProject = (projectId) => {
        let pList = getprojectList();
        return pList.find((project) => project.getprojectId() == projectId)
    }
    const deleteProject = (projectId)=> {
        let pList = getprojectList();
        pList.forEach(project => project.getprojectId() != projectId);
        localStorage.setItem(storageId, JSON.stringify(pList));
    }

    const getTaskList = (projectId) =>{
        const project = getProject(projectId);

    }
    const clearStorage = ()=>{
        localStorage.clear();
    }
    return {
       getprojectList, addProject, editStorage, getProject, deleteProject, clearStorage
    }
})();

export {storageFactory}