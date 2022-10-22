import React, { useContext, useEffect, useRef } from 'react'
import "./Form1.css"

//InputValue is the context to temporarily store the data entered by user
//I did this so that data is still retained even the current form unmounts. 
import { InputValue } from '../../Data/Context'

function Form1() {
  const InputContext = useContext(InputValue);
  const setInput = InputContext.setInputVal;
  const input = InputContext.inputVal;
  const fullName = useRef();
  const displayName = useRef();

  //When the form mounts again it will get the data from the InputValue context. And hence input values by user will not be lost.
  useEffect(() => {
    fullName.current.value = input.fullName;
    displayName.current.value = input.displayName;
  });

  //On input state change, I am creating a new object with previous value & adding updated value to it.
  //And then assigning it to the InputValue Context. 
  const setFullName = (event) => {
    const temp = { ...input, ...{ fullName: event.target.value } };
    setInput(temp);
  }
  const setDisplayName = (event) => {
    const temp = { ...input, ...{ displayName: event.target.value } };
    setInput(temp);
  }

  return (
    <div className='Form1'>
      <div className="input1">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id='fullName' placeholder='Steve Jobs' onChange={setFullName} ref={fullName} />
      </div>
      <div className="input2">
        <label htmlFor="displayName">Display Name</label>
        <input type="text" id='displayName' placeholder='Steve' onChange={setDisplayName} ref={displayName} />
      </div>
    </div>
  )
}

export default Form1