import { contentArray } from '../../Functions';
import { useState } from 'react';
import MainScreen from './MainScreen';
import LoadingScreen from './LoadingScreen';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getContent } from '../../Functions';

const Code = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const subject=props.currentSUB
    const {file,module} =useParams()
    let AllData;
    useEffect(() => {
        
            try{getContent(module,subject,file).then(()=>{
                setIsLoading(false)
                AllData= contentArray[0];
            })}
            catch(e){
                setIsLoading(true)
                alert("File Not Found")
            }
            
    },[])
    
    return (
        <div className='
    bg-gradient-to-r from-slate-900 to-slate-700
    w-full
    h-full
    min-h-screen
    '>
        {isLoading?<LoadingScreen/>:<MainScreen data={AllData}/>}   
        </div>
    )
}

export default Code