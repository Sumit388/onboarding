import React ,{useContext}from 'react'
import { Progress } from '../Data/Context';


function Circle({classname,children}) {
    const context=useContext(Progress);
    const setProgress=context.setProgress;
  return (
    <div className={classname} onClick={()=>setProgress(children)}>{children}</div>
  )
}

export default Circle