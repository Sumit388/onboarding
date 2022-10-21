import React, {useContext, useEffect, useRef} from 'react'
import './Form2.css'
import { InputValue } from '../../Data/Context'

function Form2() {
  const InputContext=useContext(InputValue);
  const setInput=InputContext.setInputVal;
  const input=InputContext.inputVal;
  const WorkspaceName=useRef();
  const GeneralURL=useRef();
  const WorkspaceURL=useRef();

  useEffect(()=>{
    WorkspaceName.current.value=input.workspaceName;
    GeneralURL.current.value=input.generalUrl;
    WorkspaceURL.current.value=input.workSpaceUrl;
  });

  const setWorkspaceName=(event)=>{
    const temp={...input,...{workspaceName:event.target.value}};
     setInput(temp);
  }
  const setGeneralURL=(event)=>{
    const temp={...input,...{generalUrl:event.target.value}};
     setInput(temp);
  }
  const setWorkSpaceURL=(event)=>{
    const temp={...input,...{workSpaceUrl:event.target.value}};
     setInput(temp);
  }

  return (
    <div className='Form2'>
        <div className="input3">
            <label htmlFor="WorkspaceName">Workspace Name</label>
            <input type="text" id='WorkspaceName' placeholder='Eden' ref={WorkspaceName} onChange={setWorkspaceName}/>
     </div>
        <div className="input4">
            <label htmlFor="displayName"> Workspace URL <p>(optional)</p></label>
            <div className="spanInput">
            <input type="text" id="GeneralURL" placeholder='www.eden.com/' ref={GeneralURL} onChange={setGeneralURL}/>
            <input type="text" id='WorkspaceURL' placeholder='Example' ref={WorkspaceURL} onChange={setWorkSpaceURL}/>
            </div>
        </div>
    </div>
  )
}

export default Form2