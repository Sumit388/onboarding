import React, { createContext, useState } from 'react'

export const Progress = createContext();
export const InputValue = createContext();

function Context({ children }) {
  const [progress, setProgress] = useState(1);

  const [inputVal, setInputVal] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    generalUrl: "",
    workSpaceUrl: "",
    usage: ""
  });

  const value = { progress, setProgress };

  const Val = { inputVal, setInputVal };

  return (
    <InputValue.Provider value={Val}>
      <Progress.Provider value={value}>
        {children}
      </Progress.Provider>
    </InputValue.Provider>
  )
}

export default Context