import React from 'react'
import images from "../../../assest/img/imagess.png"
import "./Freetu.css"
import Eye from  "../../../assest/img/eye-1.svg"

import { FaStar } from 'react-icons/fa';
export const Freetu = () => {

  const starStyle = {
    color: '#FFCE1F',
    marginRight: '5px', // Adjust the value based on your preference
  };
  return (
   <>
       <div className='free-tut'>
            
            <div className='item-1'>
             <img src={images} /> 
             <p>
             <FaStar style={starStyle} />
             <FaStar style={starStyle} />
             <FaStar style={starStyle} />
             <FaStar style={starStyle} />
             </p>
          
              <p className='convert'>
              Convert your web layout theming easily with sketch zeplin extension
              </p>
              <p className='watched' > <img className="eye"  src={Eye} /> 2345 students watched </p>
            
            </div>

            <div className='item-2'>
               <p className='free-heading'> FREE TUTORIAL </p>
               <h1> More than thousand <br/> of free  tutorial upload every week </h1>
               <p className='free-para'> Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
               <button > Explore details </button>
            </div>
       </div>
   </>
  )
}
