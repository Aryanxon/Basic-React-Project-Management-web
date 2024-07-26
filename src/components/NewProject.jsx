import React from 'react'
import Input from './Input';
import Button from './Button';
import { useRef } from 'react';
import Modal from './Modal';

function NewProject({onCancel, onAdd}) {

    const modal = useRef();
    const title = useRef();
    const Description = useRef();
    const Date = useRef();

    function handleSave(){
        const enteredtitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDate = Date.current.value;

        if(enteredtitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredtitle,
            Description: enteredDescription,
            Date: enteredDate,
        });
    }

  return (
    <>
    <Modal ref={modal}/>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
            <button className='text-stone-500 hover:text-stone-800' onClick={onCancel}>Cancel</button>
        </li>
        <li>
            <Button onClick = {handleSave}>Save</Button>
        </li>
      </menu>
      <Input type="text" ref={title} label="Title"/>
      <Input ref={Description} label="Description" textarea/>
      <Input type="date" ref={Date} label="Due Date"/>
    </div>
    </>
  );
}

export default NewProject;
