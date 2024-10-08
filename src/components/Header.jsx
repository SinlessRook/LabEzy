import React from 'react'
import { logo, PTO } from '../assets/Images'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material';

const Header = (props) => {
  const currentSUB = props.currentSUB
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const changedSUB = props.changedSUB
  const main_page = props.main_page
  const ButtonVariant = {
    visible: {
      opacity: 1, transition: { type: "spring", stiffness: 120, delay: 1.5 },
      y: 0,
      x: 0
    },
    hidden: {
      opacity: 0,
      y: '100vh',
      x: '-100vh'
    },
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

  const svgVariants = {
    visible: {rotateY:0,transition:{duration:1},opacity:1},
    hidden: {rotateY: -180,opacity:0.5},
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

  const pathVariants = {
    visible: {opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}},
    hidden:{opacity:0,pathLength:0},
  }
  return (
    <>
      <header className="w-full h-25 bg-dark_blue flex align-center justify-between">
        <div className='flex flex-row'>
          <div
            className='w-25 h-20 object-contain p-3'
          >
            <motion.svg 
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            whileHover={"hover"}
            width="94" height="64" viewBox="0 0 94 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="93" height="62.988" fill="#7EC8E3" stroke="#7EC8E3" />
              <rect x="5.59637" y="3.3313" width="82.8072" height="57.3253" fill="white" stroke="#7EC8E3" />
              <line x1="47.235" y1="-8.48808e-10" x2="47.235" y2="62.2892" stroke="#7EC8E3" stroke-width="5" />
              <motion.path 
              variants={pathVariants}
              d="M56.4318 14.415C56.4318 14.9702 56.3266 15.4425 56.1161 15.8319C55.9073 16.2213 55.6223 16.5188 55.261 16.7243C54.9014 16.9281 54.4971 17.0301 54.048 17.0301C53.5955 17.0301 53.1895 16.9273 52.8299 16.7218C52.4703 16.5163 52.1861 16.2189 51.9773 15.8294C51.7685 15.44 51.6641 14.9685 51.6641 14.415C51.6641 13.8598 51.7685 13.3875 51.9773 12.9981C52.1861 12.6086 52.4703 12.312 52.8299 12.1082C53.1895 11.9027 53.5955 11.7999 54.048 11.7999C54.4971 11.7999 54.9014 11.9027 55.261 12.1082C55.6223 12.312 55.9073 12.6086 56.1161 12.9981C56.3266 13.3875 56.4318 13.8598 56.4318 14.415ZM55.3406 14.415C55.3406 14.0554 55.2867 13.7521 55.179 13.5052C55.0729 13.2583 54.923 13.071 54.7291 12.9434C54.5352 12.8158 54.3081 12.752 54.048 12.752C53.7878 12.752 53.5607 12.8158 53.3668 12.9434C53.173 13.071 53.0222 13.2583 52.9144 13.5052C52.8084 13.7521 52.7553 14.0554 52.7553 14.415C52.7553 14.7746 52.8084 15.0779 52.9144 15.3248C53.0222 15.5717 53.173 15.759 53.3668 15.8866C53.5607 16.0142 53.7878 16.078 54.048 16.078C54.3081 16.078 54.5352 16.0142 54.7291 15.8866C54.923 15.759 55.0729 15.5717 55.179 15.3248C55.2867 15.0779 55.3406 14.7746 55.3406 14.415ZM60.3737 11.8695H61.45V15.1756C61.45 15.5469 61.3614 15.8717 61.1841 16.1501C61.0084 16.4285 60.7623 16.6456 60.4458 16.8014C60.1292 16.9555 59.7605 17.0325 59.3396 17.0325C58.917 17.0325 58.5475 16.9555 58.2309 16.8014C57.9144 16.6456 57.6683 16.4285 57.4926 16.1501C57.317 15.8717 57.2292 15.5469 57.2292 15.1756V11.8695H58.3055V15.0837C58.3055 15.2776 58.3478 15.4499 58.4323 15.6007C58.5185 15.7515 58.6394 15.87 58.7952 15.9562C58.951 16.0424 59.1324 16.0854 59.3396 16.0854C59.5484 16.0854 59.7299 16.0424 59.884 15.9562C60.0398 15.87 60.1599 15.7515 60.2444 15.6007C60.3306 15.4499 60.3737 15.2776 60.3737 15.0837V11.8695ZM62.1417 12.757V11.8695H66.3228V12.757H64.7642V16.9604H63.7003V12.757H62.1417ZM67.0114 16.9604V11.8695H69.0199C69.406 11.8695 69.735 11.9433 70.0068 12.0908C70.2785 12.2366 70.4857 12.4396 70.6282 12.6998C70.7724 12.9583 70.8445 13.2566 70.8445 13.5947C70.8445 13.9328 70.7716 14.231 70.6257 14.4896C70.4799 14.7481 70.2686 14.9494 69.9918 15.0936C69.7168 15.2378 69.3837 15.3099 68.9926 15.3099H67.7124V14.4473H68.8186C69.0257 14.4473 69.1964 14.4117 69.3306 14.3404C69.4665 14.2675 69.5676 14.1672 69.6339 14.0396C69.7018 13.9104 69.7358 13.7621 69.7358 13.5947C69.7358 13.4256 69.7018 13.2782 69.6339 13.1522C69.5676 13.0246 69.4665 12.926 69.3306 12.8564C69.1947 12.7851 69.0224 12.7495 68.8136 12.7495H68.0877V16.9604H67.0114ZM74.6881 11.8695H75.7645V15.1756C75.7645 15.5469 75.6758 15.8717 75.4985 16.1501C75.3228 16.4285 75.0768 16.6456 74.7602 16.8014C74.4437 16.9555 74.075 17.0325 73.654 17.0325C73.2315 17.0325 72.8619 16.9555 72.5454 16.8014C72.2289 16.6456 71.9828 16.4285 71.8071 16.1501C71.6314 15.8717 71.5436 15.5469 71.5436 15.1756V11.8695H72.62V15.0837C72.62 15.2776 72.6622 15.4499 72.7467 15.6007C72.8329 15.7515 72.9539 15.87 73.1097 15.9562C73.2654 16.0424 73.4469 16.0854 73.654 16.0854C73.8629 16.0854 74.0443 16.0424 74.1984 15.9562C74.3542 15.87 74.4744 15.7515 74.5589 15.6007C74.6451 15.4499 74.6881 15.2776 74.6881 15.0837V11.8695ZM76.4562 12.757V11.8695H80.6373V12.757H79.0787V16.9604H78.0148V12.757H76.4562Z" fill="black" />
              <motion.path
              variants={pathVariants}
              d="M14.4975 11.8695V16.9604H13.4212V11.8695H14.4975ZM19.6413 11.8695V16.9604H18.7116L16.4967 13.7563H16.4594V16.9604H15.3831V11.8695H16.3277L18.5251 15.0712H18.5699V11.8695H19.6413ZM20.5305 16.9604V11.8695H22.5391C22.9252 11.8695 23.2541 11.9433 23.5259 12.0908C23.7977 12.2366 24.0049 12.4396 24.1474 12.6998C24.2916 12.9583 24.3636 13.2566 24.3636 13.5947C24.3636 13.9328 24.2907 14.231 24.1449 14.4896C23.9991 14.7481 23.7878 14.9494 23.511 15.0936C23.2359 15.2378 22.9028 15.3099 22.5117 15.3099H21.2315V14.4473H22.3377C22.5449 14.4473 22.7156 14.4117 22.8498 14.3404C22.9857 14.2675 23.0868 14.1672 23.1531 14.0396C23.221 13.9104 23.255 13.7621 23.255 13.5947C23.255 13.4256 23.221 13.2782 23.1531 13.1522C23.0868 13.0246 22.9857 12.926 22.8498 12.8564C22.7139 12.7851 22.5416 12.7495 22.3327 12.7495H21.6069V16.9604H20.5305ZM28.2073 11.8695H29.2837V15.1756C29.2837 15.5469 29.195 15.8717 29.0177 16.1501C28.842 16.4285 28.5959 16.6456 28.2794 16.8014C27.9629 16.9555 27.5941 17.0325 27.1732 17.0325C26.7506 17.0325 26.3811 16.9555 26.0645 16.8014C25.748 16.6456 25.5019 16.4285 25.3263 16.1501C25.1506 15.8717 25.0628 15.5469 25.0628 15.1756V11.8695H26.1391V15.0837C26.1391 15.2776 26.1814 15.4499 26.2659 15.6007C26.3521 15.7515 26.473 15.87 26.6288 15.9562C26.7846 16.0424 26.9661 16.0854 27.1732 16.0854C27.382 16.0854 27.5635 16.0424 27.7176 15.9562C27.8734 15.87 27.9935 15.7515 28.078 15.6007C28.1642 15.4499 28.2073 15.2776 28.2073 15.0837V11.8695ZM29.9753 12.757V11.8695H34.1564V12.757H32.5978V16.9604H31.5339V12.757H29.9753Z" fill="black" />
            </motion.svg>

          </div>
          <motion.h3
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 500 }}
            className='text-baby_blue text-4xl py-4 font-bold'>LabEzy</motion.h3>

        </div>
        {main_page?<motion.button
          variants={ButtonVariant}
          initial='hidden'
          animate='visible'
          whileHover='hover'
          transition={{ duration: 0.8, delay: 1.5 }}
          className='p- hover:scale-110 mx-5'
          onClick={() => {
            if (currentSUB === 'DS') {
              changedSUB('OOP')
            } else {
              changedSUB('DS')
            }
          }}
          >
          <img src={PTO} alt="Switch" />
        </motion.button>:<div className='flex flex-col gap-1 m-1 '>
          <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 500 }}
          whileHover={{scale:1.1,}}
          >
          <Button variant='outlined' 
          onClick={() => {
            window.location.href = 'https://github.com/SinlessRook/Sem-3-OOP-Lab';
          }}
          sx={{
            borderColor: 'white',
            color: 'white',
            width: isSmallScreen ? '100%' : '100%',
            padding: isSmallScreen ? '8px 16px' : '10px 20px',
            fontSize: isSmallScreen ? '0.875rem' : '1rem',
          }}>
          Contribute OOP
        </Button>
          </motion.div>
          <motion.div
          initial={{ x: '-100vh',y:'10vh' }}
          animate={{ x: 0,y:0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 500 }}
          whileHover={{scale:1.1,}}
          >
          <Button 
          onClick={() => {
            location.href = 'https://github.com/SinlessRook/Sem-3-DS-Lab'
          }}
          variant='outlined' sx={{
            borderColor: 'white',
            color: 'white',
            width: isSmallScreen ? '100%' : '100%',
            padding: isSmallScreen ? '8px 16px' : '10px 20px',
            fontSize: isSmallScreen ? '0.875rem' : '1rem',
          }}>
          Contribute DS
        </Button>
          </motion.div>
        </div>}
        

      </header>
    </>
  )
}

export default Header