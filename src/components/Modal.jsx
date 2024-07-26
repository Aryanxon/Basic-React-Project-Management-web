import React, { forwardRef } from 'react'
import { useRef, useImperativeHandle } from 'react'

const Modal = forwardRef(function Modal({...props},ref) {
    const dialog = useRef();

    useImperativeHandle(ref,() => {
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });


  return (
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 rounded-md shadow-md px-4'>
        <h3 className='text-xl font-bold text-red-400 my-4'>Invalid Input</h3>
        <p className='text-stone-600 mb-4'>You might have entered invalid input</p>
        <p className='text-stone-600 mb-4'>Please enter a valid input</p>
        <form method="dialog">
            <button className='mt-4 text-right px-4 py-2 bg-stone-300 rounded-md my-2 hover:bg-stone-500'>Close</button>
        </form>
    </dialog>
  );
})

export default Modal
