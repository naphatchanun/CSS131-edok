import React from 'react'
import ReactCurvedText from 'react-curved-text';
import bgcur from './Images/A.png';
import welcome from './Images/welcome3.png';



const HomeGPABeU = () => {
  return (
    <>
    <div className='bg-[#fffded] h-screen'>
      <div className="flex justify-center items-center pt-5 pl-15">
        <img src={welcome} alt="" width="1200px" />
      </div>
      {/* <h1 className='text-[100px] font-blod'>
      <ReactCurvedText
            width={1500}
            height={500}
            cx={750}
            cy={450}
            rx={300}
            ry={300}
            startOffset={-10}
            reversed={true}
            text="WELCOME TO GPABeU"
        />
      </h1> */}
      {/* <div className="flex justify-center items-center">
        <img src={bgcur} alt="" width="100px"  />
      </div> */}
      
    </div>
   
    </>
  )
}

export default HomeGPABeU