import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSlideBar from "./components/ProjectsSlideBar.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // Starting a Project 
  function handleStartAddProject (){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Selecting a project 
  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id,
        
      };
    });
  }

  // Cancelling a project
  function handleCancelProject (){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Adding data in a project 
  function handleAddProject(projectData){
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects : [...prevState.projects, newProject],
      };
    });
  }

  // Deleting a Project 
  function handleDeleteProject (){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  // Adding Data in the task of a project 
  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId= Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Deleting the Task of a Project 
  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  let content=<SelectedProject 
  project = {selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask= {handleDeleteTask} 
  tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectId === null){
    content = (<NewProject onCancel = {handleCancelProject} onAdd={handleAddProject}/>);
  }
  else if(projectsState.selectedProjectId === undefined){
    content = (<NoProjectSelected onStartAddProjects ={handleStartAddProject}/> );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSlideBar 
      onStartAddProjects ={handleStartAddProject} 
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
