// import React from 'react'
import gpax from './Images/gpax.png';
import gpapic from './Images/gpa.png';
import FormGPA from './Components/FormGPA';
import FormGPAX from './Components/FormGPAX';
const Gpapage = () => {


  return (
    <>
      <div className='bg-[#fffded] h-screen'>
        <div className='flex justify-between container mx-auto px-36'>
          <div>
            <img src={gpax} className='w-[200px]' alt="" />
            <FormGPAX/>
          </div>
          <div>
            <img src={gpapic} className='w-[200px]' alt="" />
            <FormGPA/>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Gpapage
