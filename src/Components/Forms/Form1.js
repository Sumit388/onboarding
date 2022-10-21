import React, {useContext, useEffect, useRef} from 'react'
import "./Form1.css"
import { InputValue } from '../../Data/Context'

function Form1() {
  const InputContext=useContext(InputValue);
  const setInput=InputContext.setInputVal;
  const input=InputContext.inputVal;
  const fullName=useRef();
  const displayName=useRef();
  
  useEffect(()=>{
    fullName.current.value=input.fullName;
    displayName.current.value=input.displayName;
  });

  const setFullName=(event)=>{
    const temp={...input,...{fullName:event.target.value}};
     setInput(temp);
  }
  const setDisplayName=(event)=>{
    const temp={...input,...{displayName:event.target.value}};
     setInput(temp);
  }

  return (
    <div className='Form1'>
        <div className="input1">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id='fullName' placeholder='Steve Jobs' onChange={setFullName} ref={fullName}/>
        </div>
        <div className="input2">
            <label htmlFor="displayName">Display Name</label>
            <input type="text" id='displayName' placeholder='Steve' onChange={setDisplayName} ref={displayName}/>
        </div>
    </div>
  )
}

export default Form1