import React,{useContext} from 'react'
import './FormSection.css'
import { Progress } from '../Data/Context';
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'

function FormSection() {
    const context=useContext(Progress);
    let progress=context.progress;
    const formArr=[<Form1/>,<Form2/>,<Form3/>,<></>];
 
    return (
         <div className='FormSection'>
            {formArr[progress-1]}
        </div>
    )
}

export default FormSection