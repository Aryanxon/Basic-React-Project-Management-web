import React from 'react'
import Button from './Button.jsx'

function ProjectsSlideBar({onStartAddProjects, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className='w-1/3 md:w-72 px-8 py-16 bg-black text-white rounded-r-md'>
        <h2 className='mb-4 font-bold uppercase md:text-xl text-stone-200'>
            Your Projects
        </h2>
        <div>
            <Button onClick={onStartAddProjects}>
                + Add Project
            </Button>
        </div>
        <ul className='mt-4'>
            
            {projects.map((project) => {
                let cssclasses = 'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';
                if( project.id === selectedProjectId)
                {
                    cssclasses+= 'bg-stone-800 text-stone-200'
                }
                else{
                    cssclasses+= 'text-stone-400'
                }

                return(<li key={project.id}>
                    <button className='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800' onClick={() => onSelectProject(project.id)}>
                        {project.title}</button> </li>
            )
            })}
        </ul>

    </aside>
  );
}

export default ProjectsSlideBar
