import React from 'react'
import Task from './Task.jsx'

function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {


  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-2 mb-4 border-b-2 border-stone-200'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold mb-2 text-stone-500'>{project.title}</h1>
                <button className='text-stone-600 hover:text-stone-950 hover:bg-stone-400 px-4 py-2 rounded-md' onClick={onDelete}>Clear</button>
            </div>
            <p className='mb-4 text-stone-400'>{project.Date}</p>
            <p className='text-slate-600'>{project.Description}</p>
        </header>
        <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} project={project}/>
    </div>
  )
}

export default SelectedProject
