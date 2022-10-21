import React, { useContext,useState} from 'react'
import "./ProgressBar.css"
import Circle from './Circle'
import { Progress } from '../Data/Context';

function ProgressBar() {
    const context=useContext(Progress);
    const progress=context.progress;
    
    //state to define number of steps in progress bar
    const [circle]=useState(4);
    const circleArr=[];
     
   
    //pushing circle element into circle array.
    for (let i = 1; i <= circle; i++) {
        circleArr.push(<Circle classname={i<=progress?"circle active":"circle"} key={i} >{i}</Circle>);
    }

    
  return (
    <div className='ProgressBar'>
        <div className="progressLine" style={{width:`calc(${progress*25}% + ${(progress-2)*15}px)`}}></div>
        {circleArr}
    </div>
  )
}

export default ProgressBar