

export default class TodDoList{
    constructor(){
        this.projects = [];

    }

    setProjects(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;

    }

    getProject(projectId){
        return this.projects.find((project)=> project.getId() == projectId)
    }

    contains(projectId){
        return this.projects.some((project)=>project.getId() == projectId);
    }

    addProject(newProject){
        this.projects.push(newProject);
    }

    deleteProject(projectId){
        const projectToDelete = this.projects.find(
            (project) => project.getId() === projectId
          )
          this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }

}