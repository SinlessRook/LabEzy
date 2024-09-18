import React from 'react'
import { motion } from 'framer-motion'
import { getData } from '../Functions';
const Modules = (props) => {
const clicked = props.clicked;
const selectedModule = props.selectedModule;
const changed = props.changed
const subject = props.subject
const lst=['Module 1','Module 2','Module 3','Module 4','Module 5']
const containerVarients={
  hidden:{opacity:0,
      x:'100vh'
  },
visible:{
  opacity:1,x:0,
transition:{duration: 0.4, type: "spring", stiffness: 120}
}
}
  return (
    <motion.div 
    variants={containerVarients}
    initial='hidden'
    animate='visible'
    className='text-baby_blue flex flex-col justify-center  gap-5'>
      <div className='flex flex-col items-center'>
      <h1 className='p-4 align-center text-5xl font-semibold'>{subject}:Choose The Module</h1>
      <hr className='w-3/4'/>
      </div>
   
    <br />
    <div className='px-20 text-3xl flex flex-col gap-5  list-none'>
    {lst.map((value, index) => (
      <motion.li
      whileHover={{scale:1.3,originX:0,color:"#F0E68C"}}
      transition={{type:"spring",stiffness:300}}
       key={index} className='hover:cursor-pointer ' onClick={async()=>{
        await getData(index+1,subject);
        clicked(false);changed(true);selectedModule(index+1)}}>{value}</motion.li>
    ))}
    </div>
  
</motion.div>
  )
}

export default Modules