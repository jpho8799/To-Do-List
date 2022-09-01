import {projectFactory } from "./Project";
import { taskFactory } from "./Task";
import {storageFactory} from "./Storage";

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

function generateProjectSelectionList(){
   let pList = storageFactory.getprojectList();
   const projectSelection = document.getElementById('project-list');
   pList.forEach(project =>{
       console.log(project);
       
       const projectTitle = project.getprojectTitle();
       const newOption = document.createElement('option');
       newOption.textContent = projectTitle;
       newOption.value = project.getprojectId();
       projectSelection.appendChild(newOption);
       

   })
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



export {validateForm, clearForm, closeForm};