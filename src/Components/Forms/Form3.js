import React, { useEffect, useState, useContext } from 'react'
import './Form3.css'
import { RiUserFill } from "@react-icons/all-files/ri/RiUserFill";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";

//InputValue is the context to temporarily store the data entered by user
//I did this so that data is still retained even the current form unmounts. 
import { InputValue } from '../../Data/Context'


function Form3() {
  const InputContext = useContext(InputValue);
  const setInput = InputContext.setInputVal;
  const input = InputContext.inputVal;

  //Usage is the state to control styles of the label for which radio button is selected.
  const [usage, setUsage] = useState();

  //When the form mounts again it will get the data from the InputValue context. And hence input values by user will not be lost.
  useEffect(() => {
    setUsage(input.usage);
  }, [input.usage])

  //Updating the usage state & InputValue context when the radio buttons are switched
  const radioInputChange = (event) => {
    setUsage(event.target.id);
    const temp = { ...input, ...{ usage: event.target.id } };
    setInput(temp);
  }

  return (
    <div className='Form3'>
      <div className="input5" onChange={radioInputChange}>
        {/*Controling Component's class names according to the usage state status, This usage statae is updated by function radioInputChange*/}

        <input type="radio" name="usage" id="myself" />
        <label htmlFor="myself" className={usage === "myself" ? "active" : ""}>
          <div className="contents">
            <div className={usage === "myself" ? "icon highlight" : "icon"}><RiUserFill /></div>
            <h3>For myself</h3>
            <p>Write better. Think more clearly. Stray organized.</p>
          </div>
        </label>


        <input type="radio" name="usage" id="team" />
        <label htmlFor="team" className={usage === "team" ? "active" : ""}>
          <div className="contents">
            <div className={usage === "team" ? "icon highlight" : "icon"}><HiUserGroup /></div>
            <h3>With my team</h3>
            <p>Wikis, docs, tasks & projects, all in one place.</p>
          </div>
        </label>


      </div>
    </div>
  )
}

export default Form3