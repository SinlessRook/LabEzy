import React from 'react'
import Modules from './Modules';
import { delay, motion } from 'framer-motion';
import { X } from '@mui/icons-material';
import { duration } from '@mui/material';
const Welcome = (props) => {
    const clicked = props.clicked;
    const changed = props.changed;

    const ButtonVariant = {
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className='text-baby_blue flex flex-col justify-center items-center gap-20'>
            <div id='Header' className='flex flex-col items-center'>
                <h1
                    className='p-4 align-center text-5xl'>Welcome To LabEzy</h1>
                <hr className='w-3/4 ' />
            </div>
            <motion.button
                variants={ButtonVariant}
                whileHover="hover"
                onClick={() => {
                    clicked(false)
                    changed(true)
                }}
                className='p-4 hover:scale-110 bg-dark_blue rounded-full text-3xl border-2 border-blue w-3/4'>CONTINUE</motion.button>
        </motion.div>
    )
}

export default Welcome