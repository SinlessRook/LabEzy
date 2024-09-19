import React from 'react'
import { dataDS, dataOOP,getContent} from '../Functions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { useNavigate  } from 'react-router-dom';

const Program = (props) => {
    const navigate = useNavigate();
    const clicked = props.clicked;
    const changed = props.changed;
    const goBack = props.goBack;
    const Module = props.Module;
    const subject = props.subject;
    let data;
    subject=='DS'?data = dataDS["Module " + Module]:data = dataOOP["Module " + Module];

    const containerVarients={
        hidden:{opacity:0,
            x:'100vh'
        },
    visible:{
        opacity:1,x:0,
    transition:{duration: 0.4, type: "spring", stiffness: 120}
    }
    }

    const ButtonVariant = {
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
    return (
        <motion.div
        variants={containerVarients}
            initial='hidden'
            animate='visible'
            className='text-baby_blue flex flex-col justify-center  gap-5'>
            <div id='Heading' className='flex flex-row '>
            <motion.button
                variants={ButtonVariant}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 500 }}
                    whileHover="hover"
                    onClick={() => { clicked(false); goBack(true) }}><ArrowBackIcon sx={{ fontSize: '60px', paddingTop: 2, cursor: 'pointer' }} /></motion.button>
                <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='pt-4 align-center text-3xl font-semibold md:text-5xl'>Available Programs for {subject}</h1>
                <hr className='w-3/4 ' />
                </div>
                
                
            </div>

            <br />
            <div className='px-20 text-xl flex flex-col gap-5 list-none md:text-3xl'>
                {data.map((value, index) => (
                    <motion.li
                        whileHover={{ scale: 1.3, originX: 0, color: "#F0E68C"}}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={index}
                        className='hover:cursor-pointer hover:scale-110'
                        onClick={() => {
                            navigate("/LabEzy/Code/" + value["filename"] + "/" + Module);
                        }}>
                        {value["name"]}
                    </motion.li>
                ))}

            </div>
        </motion.div>
    )
}

export default Program