import {projectFactory } from "./Project";
import { taskFactory } from "./Task";
import {storageFactory} from "./Storage";

function validateForm(form){
    Array.from(form.elements).forEach(element=>{
        if(element.value <= 0){
            invalidInput(element);
        }else{
            validInput(element);
        }
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



export {validateForm};