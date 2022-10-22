import React, { useContext } from 'react'
import "./Headings.css"

//Importing progress context so that different heading can be displayed according to what progress is.
import { Progress } from '../Data/Context';

//Heading text is the array of objects containing all the headings that needs to be displayed.
import { HeadingText } from '../Data/data';



function Headings() {
    const context = useContext(Progress);
    const progress = context.progress;

    return (
        <div className="Headings">
            {/*displaying heading according to what is progres is*/}
            <h4>{HeadingText[progress - 1].heading}</h4>
            <p>{HeadingText[progress - 1].para}</p>
        </div>
    )
}

export default Headings