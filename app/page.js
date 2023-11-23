"use client"
import React, { useState } from 'react'

const page = () => {

    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
  return (
    <>

    <h1 className='bg-black text-white font-bold text-2xl p-5 text-center'>My TODO list</h1>

    <form>
        <input
            type='text'
            className='border-4 border-zinc-800 m-5 px-5 py-5'
            placeholder='Enter Task'
            value={title}
            onChange={(e)=>{
                settitle(e.target.value)
            }
            }
        />
        <input
            type='text'
            className='border-4 border-zinc-800 m-5 px-5 py-5'
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

    </>
  )
}

export default page