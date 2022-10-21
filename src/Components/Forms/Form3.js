import React, { useEffect, useState, useContext } from 'react'
import { InputValue } from '../../Data/Context'
import './Form3.css'
import { RiUserFill} from "@react-icons/all-files/ri/RiUserFill";
import { HiUserGroup} from "@react-icons/all-files/hi/HiUserGroup";

function Form3() {
  const InputContext=useContext(InputValue);
  const setInput=InputContext.setInputVal;
  const input=InputContext.inputVal;

const[usage,setUsage]=useState();

useEffect(()=>{
  setUsage(input.usage);
},[input.usage])

 const radioInputChange=(event)=>{
    setUsage(event.target.id);
    const temp={...input,...{usage:event.target.id}};
    setInput(temp);
 }

  return (
    <div className='Form3'>
        <div className="input5" onChange={radioInputChange}>
            <input type="radio" name="usage" id="myself" />
            <label htmlFor="myself" className={usage==="myself"?"active":""}>
                <div className="contents">
                 <div className={usage==="myself"?"icon highlight":"icon"}><RiUserFill/></div>
                 <h3>For myself</h3>
                 <p>Write better. Think more clearly. Stray organized.</p>
                 </div>
            </label>
            <input type="radio" name="usage" id="team" />
            <label htmlFor="team" className={usage==="team"?"active":""}>
            <div className="contents">
                <div className={usage==="team"?"icon highlight":"icon"}><HiUserGroup/></div>
                 <h3>With my team</h3>
                 <p>Wikis, docs, tasks & projects, all in one place.</p>
                 </div>
            </label>
        </div>
    </div>
  )
}

export default Form3