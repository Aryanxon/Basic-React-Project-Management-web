import React from 'react'
import NewTask from './NewTask'

function Task({onAdd, onDelete, tasks}) {

    let content;
    if(tasks.length === 0 ){
        content =  <p>There is no task</p>;
    }
    else if (tasks.length> 0 ){
        content = tasks.map((task) => (
            <ul className='px-5 py-[0.15rem] mt-8 rounded-md bg-stone-100'>
            <li key={task.id} className='flex justify-between my-8'>
                <span >{task.text}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>Clear</button>
            </li>
            </ul>
        ));
    }
  return (
    <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd}/>
        {content}
    </section>
  )
}

export default Task
