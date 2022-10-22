import React from 'react'
import './Onboard.css'

//Importing components 
import Headings from '../Components/Headings'
import ProgressBar from '../Components/ProgressBar'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import FormSection from '../Components/FormSection'
import FinishIcon from '../Components/FinishIcon'


function Onboard() {
  return (
    <div className='Onboard'>
      <Logo />
      <ProgressBar />
      <FinishIcon/>
      <Headings />
      <FormSection/>
      <Button/>
    </div>
  )
}

export default Onboard