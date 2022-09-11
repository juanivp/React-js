import React from 'react'
import './spinner.css';
import { SpinnerCircular } from 'spinners-react';


function Spinner() {
  return (
    <div className='container-fluid spinner'>

    <SpinnerCircular size={77} thickness={112} speed={100} color="rgba(172, 113, 57, 0.58)" secondaryColor="rgba(172, 117, 57, 0.28)" /> 

    </div>
  )
}

export default Spinner