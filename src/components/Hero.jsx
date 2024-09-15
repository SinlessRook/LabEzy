import React from 'react'
import { AnimatePresence,delay,motion} from 'framer-motion'
import Welcome from './welcome'
import Modules from './Modules'
import Program from './Program'
import { useState } from 'react'


const Hero = (props) => {
    const currentSUB = props.currentSUB;
    const [show_Home, setShow_Home] = useState(true);
    const [show_Module, setShow_Module] = useState(false);
    const [show_Program, setShow_Program] = useState(false);
    const [show_Code,setshow_Code] = useState(false);
    const[selectedModule, setSelectedModule] = useState(1);

    const routeVarients = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition:{delay:1,duration:1.5}
        },
        exit: {
            opacity: 0,
            x: "-100vw",
            transition:{ease:"easeInOut"}
        }
    }

    return (
        
        <>
        
            <main className='
    bg-gradient-to-r from-slate-900 to-slate-700
    w-full
    h-screen
    flex
    justify-center
    items-start
    pt-32
    '>
            <AnimatePresence 
            
            >
            {show_Home && 
            <motion.div initial="hidden" animate="visible" exit="exit" variants={routeVarients}  ><Welcome 
            clicked={setShow_Home} changed={setShow_Module}/></motion.div>
            }
            </AnimatePresence>
            
            <AnimatePresence>
            {show_Module &&
                <motion.div variants={routeVarients}  exit="exit"><Modules clicked={setShow_Module} changed={setShow_Program} selectedModule={setSelectedModule} subject={currentSUB}/></motion.div>
             }
             </AnimatePresence>
            {show_Program && <AnimatePresence>
                <motion.div variants={routeVarients}  exit="exit"><Program clicked={setShow_Program} changed={setshow_Code} Module={selectedModule} goBack={setShow_Module} subject={currentSUB}/></motion.div>
            </AnimatePresence> }
            </main>
        </>
    )
}

export default Hero