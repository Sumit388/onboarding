import React, { useContext } from 'react'
import './FormSection.css'

//Importing the progress context so that which form is displayed can be controled according to what current progress is.
import { Progress } from '../Data/Context';

//Importing our form components.
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'

function FormSection() {
    const context = useContext(Progress);
    let progress = context.progress;

    //Pushing our form elements into array so that perticular form can be accessed with progress as index number.
    //Just for making the code little more cleaner.
    const formArr = [<Form1 />, <Form2 />, <Form3 />, <></>];

    return (
        <div className='FormSection'>
            {formArr[progress - 1]}
        </div>
    )
}

export default FormSection