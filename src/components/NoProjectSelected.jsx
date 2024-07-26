import React from 'react'
import Logo from '../assets/no-projects.png';
import Button from './Button.jsx';

function NoProjectSelected({onStartAddProjects}) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={Logo} alt="notebook" className='h-16 w-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project is selected</h2>
      <p className='text-stone-400 mb-4'>select a project and start your journey</p>
      <Button onClick={onStartAddProjects}>Start Project</Button>
    </div>
  )
}

export default NoProjectSelected
