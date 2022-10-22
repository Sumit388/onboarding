import React, { useContext } from 'react'

//Importing progress context because we need to update progress according to the circle that is clicked.
import { Progress } from '../Data/Context';


function Circle({ classname, children }) {
  const context = useContext(Progress);
  const setProgress = context.setProgress;
  return (

    <div className={classname} onClick={() => setProgress(children)}>
      {/* On clicking any circle we set the progress equal to the children of that circle.*/}
      {/* That is if we click circle 3 progress context will be set to 3*/}
      {children}
    </div>
  )
}

export default Circle