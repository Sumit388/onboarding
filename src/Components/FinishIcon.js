import React,{useContext} from 'react'
import './FinishIcon.css'
import complete from '../Assets/complete.png'
import { Progress } from '../Data/Context';


function FinishIcon() {
    const context=useContext(Progress);
    const progress=context.progress;

  return (
    <div className='FinishIcon' style={progress<=3?{display:"none"}:{}}>
        <img src={complete} alt="" />
    </div>
  )
}

export default FinishIcon