import React,{useContext} from 'react'
import './Button.css'
import { Progress } from '../Data/Context';

function Button() {
    const context=useContext(Progress);
    const progress=context.progress;
    const setProgress=context.setProgress;

    const buttonText=["Create Workspace", "Create Workspace", "Create Workspace", "Launch Eden"];

    const updateProgress=()=>{
        setProgress((currentVal)=>{return currentVal<4?currentVal+1:currentVal})
    }

  return (
    <div className='Button'>
        <button onClick={updateProgress}> {buttonText[progress-1]}</button>
    </div>
  )
}

export default Button