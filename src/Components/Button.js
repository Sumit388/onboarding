import React,{useContext} from 'react'
import './Button.css'

//Importing Progess context to control button text 
import { Progress } from '../Data/Context';

//Importing button text array.
import { buttonText } from '../Data/data';

function Button() {

  //declaring contexts
    const context=useContext(Progress);
    const progress=context.progress;
    const setProgress=context.setProgress;
   
    //updating progress context on button click
    const updateProgress=()=>{
        setProgress((currentVal)=>{return currentVal<4?currentVal+1:currentVal})
    }

  return (
    <div className='Button'>
      {/* Showing the button text according to what preogess context state is */}
        <button onClick={updateProgress}> {buttonText[progress-1]}</button>
    </div>
  )
}

export default Button