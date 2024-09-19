import React from 'react'
import Paper from '@mui/material/Paper';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const MainScreen = (props) => {
    const { algorithm, code, output } = props.data;
    const navigate = useNavigate();
  return (
    <>
     <br />
            <br />
            <motion.button
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 500 }}
                    whileHover={{scale:1.3}}
                    onClick={() => {
                        navigate("/LabEzy/");
                        
                    }}><ArrowBackIcon sx={{ fontSize: '60px', paddingTop: 2, cursor: 'pointer', color:'white'}} /></motion.button>
            <div className='flex md:flex-row flex-col'>
                <Paper sx={{
                    width: {xs:'95%',md:'60%'},
                    height: 'auto',
                    minHeight: '80vh',
                    padding: '10px',
                    margin:'10px',
                    marginTop: '0px',
                    backgroundColor: 'rgba(3, 4, 18, 0.53)',
                    color: '#F0FFFF',
                    borderTopLeftRadius: '200px',
                    borderBottomLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '200px'
                }}>
                    <h1 className='text-3xl text-[#7EC8E3] font-bold text-center px-10 underline'>ALGORITHM</h1>
                    <br />
                    <ul className='text-2xl text-baby_blue font-semibold px-20 list-decimal py-8'>
                        {algorithm.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </Paper>
                <Paper sx={{
                    width: {xs:'95%',md:'40%'},
                    height: 'auto',
                    minHeight: '80vh',
                    padding: '10px',
                    margin: '10px',
                    marginTop: '0px',
                    backgroundColor: 'black',
                    color: '#F0FFFF',
                    borderRadius: '10px'
                }}>
                <SyntaxHighlighter language="c" style={solarizedlight} customStyle={{ background: 'none', marginTop:'10px'}}>
               {code}
           </SyntaxHighlighter>
               </Paper>
            </div>
    </>
  )
}

export default MainScreen