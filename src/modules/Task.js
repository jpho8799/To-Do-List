
import {v4 as uuidv4} from 'uuid';
const taskFactory =  (title, dueDate, priority) =>{
    const _taskId = uuidv4();
    let _title = title;
    let _dueDate = dueDate;
    let _priority = priority;

    const getTaskId = ()=> _taskId;
    const getTitle = ()=> _title;
    const getdueDate = ()=> _dueDate;
    const getPriority = ()=> _priority;

    const editTitle = title => {
        _title = title;
    };
    const editDueDate = dueDate =>{
        _dueDate = dueDate;
    };
    const editPriority = priority =>{
        _priority = priority;
    }

    return {
       _taskId, _title, _dueDate, _priority, getTaskId, getTitle, getdueDate, getPriority, editTitle, editDueDate, editPriority
    }
}



export {taskFactory}