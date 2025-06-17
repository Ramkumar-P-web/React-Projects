import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';


const AddJob = () => {
   
  const [title,setTitle] = useState('');
  const [location,setLocation] = useState('');
  const [category,setCategory] = useState('');
  const [level,setLevel] = useState('');
  const [salary,setSalary] = useState('');

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(()=>{
    //Initiate Quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{
        theme: 'snow',
      })
    }
  },[])

  return (
      <form className='flex flex-col items-start container p-4 w-full gap-3'>
        <div className='w-full'>
        <p className='mb-2'>Job Title</p>
        <input className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded outline-none' type="text" placeholder='Type here' required value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        
        <div className='w-full max-w-lg'>
        <p className='mb-2'>Job Description</p>
        <div ref={editorRef}></div>
        </div>

        <div className='flex flex-col sm:flex-row sm:gap-8 w-full gap-2'>
          
          <div>
            <p className='mb-2'>Job Catagory</p>
             <select className='w-full border-2 border-gray-300 rounded px-3 py-2' onChange={e=>setCategory(e.target.value)}>
              {
                JobCategories.map((category,index)=>(
                  <option key={index} value={category}>{category}</option>
                ))
              }
             </select>
             </div>
          <div>
            <p className='mb-2'>Job Location</p>
            <select className='w-full border-2 border-gray-300 rounded px-3 py-2 outline-none' onChange={e=>setLocation(e.target.value)}>
              {
                JobLocations.map((location,index)=>(
                  <option key={index} value={location}>{location} </option>
                ))
              }
            </select>
          </div>
          <div>
            <p className='mb-2'>Job Level</p>
            <select className='w-full border-2 border-gray-300 rounded px-3 py-2 outline-none' onChange={e=>setLevel(e.target.value)}>
              <option value="Begginer level">Begginer level</option>
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
          
        </div>
        <div>
            <p className='mb-2'>Job Salary</p>
            <input className='w-full border-2  border-gray-300 rounded px-3 py-2 outline-none'   onChange={e=>setSalary(e.target.value)} type="Number" placeholder='2500' />
          </div>
        <button className='w-28 bg-black py-3 mt-4 text-white text-bold rounded' type='submit'>Add Job</button>
      </form>
    
  )
}

export default AddJob