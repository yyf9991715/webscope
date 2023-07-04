import React from 'react'
import "./Footer2.css"
import img from "../../assets/image-2.jpg"

function Footer2() {
  return (
    <div className='footer1'>
    <div className='left'>
        <img src={img} alt='veges' />
    </div>
    <div className='right'>
        <h1>eLearningHelper is the world's lastest resource of learning
        </h1>
        <p>
            we provide learning resource.
            
        </p>
        <p> We provide chatgpt communication.  </p>
    </div>
</div>
  )
}

export default Footer2
