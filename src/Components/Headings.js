import React ,{useContext}from 'react'
import "./Headings.css"
import { Progress } from '../Data/Context';

function Headings() {
    const context=useContext(Progress);
    const progress=context.progress;

    const val = [{ heading: "Welcome! First things first...", para: "You can always change them later." },
                  {heading: "Let's set up a home for all your work", para: "You can always create another workspace later."},
                 {heading: "How are you planning to use Eden?", para: "We'll streamline your setup experience accordingly."},
                 {heading:"Congratulations, Eren!", para: "You have completed onboarding, you can start using Eden!"}]
    return (
        <div className="Headings">
            <h4>{val[progress-1].heading}</h4>
            <p>{val[progress-1].para}</p>
        </div>
    )
}

export default Headings