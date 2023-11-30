"use client"
import React, { useState } from 'react'

const page = () => {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [taskList, addTask] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTask([{title, desc},...taskList])
        setdesc("")
        settitle("")
        console.log(taskList)
        console.log(title)
        console.log(desc)
    }

    const handle_delete = (i)=> {
        const task_list_copy=[...taskList];
        task_list_copy.splice(i,1);
        addTask(task_list_copy);
    }

    let renderTask = "No Tasks pending you are all caught up!"

    if(taskList.length>0){
        renderTask = taskList.map((t,i)=>{
            return(
                <li key={i} className='flex justify-between items-center'>
                    <div className='flex justify-between items-center w-1/2'>
                        <h5 className='text-2XL font-semibold'>{t.title}</h5>
                        <h6 className='text-2XL font-semibold'>{t.desc}</h6>
                    </div>
                    <button onClick={()=>{handle_delete(i)}}
                    className='bg-red font-bold text-white'>Done</button>
                </li>
                
            );
        });
    }
    
    

  return (
    <>

    <h1 className='bg-black text-white font-bold text-2xl p-5 text-center'>My TODO list</h1>


    <form onSubmit={handleSubmit} className='flex justify-between '>
        <input
            type='text'
            className='border-4 border-zinc-800 m-5 px-5 py-5 w-1/2'
            placeholder='Enter Task'
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }
            }
        />
        <input
            type='text'
            className='border-4 border-zinc-800 m-5 px-5 py-5 w-1/2'
            placeholder='Enter Description'
            value={desc}
            onChange={(e)=>{
                setdesc(e.target.value)
            }}
        />
        <button className='text-white bg-black font-bold p-3 m-5 rounded'>
            Add Task
        </button>
    </form>

    <hr/>

    <div className='p-10 m-5 bg-slate-500  justify-center'>
            <ul className='flex justify-between'>
            <div className='flex items-center justify-between w-1/2'>
                <h2 className='text-2XL font-bold'>Title</h2>
                <h2 className='text-2XL font-bold'>Description</h2>
            </div>
            <h2 className='text-2XL font-bold'>Action</h2>
            </ul>
            <ul>{renderTask}</ul>
    </div>

    </>
  )
}

export default page