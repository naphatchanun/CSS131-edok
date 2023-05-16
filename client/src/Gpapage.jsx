import React from 'react'
import gpax from './Images/gpax.png';
import gpa from './Images/gpa.png';

const Gpapage = () => {
  return (
    <>
      <div className='bg-[#fffded] h-screen'>
        <div className='grid grid-cols-2 '>
          <div className='flex flex-col'>
            <div className="flex justify-center items-center pt-5">
              <img src={gpax} alt="" width="150px" />
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#2A2F4F] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#2A2F4F] rounded-lg w-[250px] h-[40px]' />
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#9384D1] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#9384D1] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#917FB3] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#917FB3] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#C9A7EB] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#C9A7EB] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#E5BEEC] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#E5BEEC] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#FDE2F3] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#FDE2F3] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center pt-10 gap-10'>
              <button className='border-1 p-2 rounded-lg  rounded-full border-[#71a0c7] bg-[#71a0c7]'>
                SUBMIT 
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className="flex justify-center items-center pt-5">
              <img src={gpa} alt="" width="150px" />
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#2A2F4F] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#2A2F4F] rounded-lg w-[250px] h-[40px]' />
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#9384D1] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#9384D1] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#917FB3] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#917FB3] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#C9A7EB] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#C9A7EB] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#E5BEEC] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#E5BEEC] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center gap-5 pt-5'>
              <input type="text" className='border-2 border-[#FDE2F3] rounded-lg w-[60px] h-[40px]'/>
              <input type="text" className='border-2 border-[#FDE2F3] rounded-lg w-[250px] h-[40px]'/>
            </div>
            <div className='flex justify-center pt-10 gap-10'>
              <button className='border-1 p-2 rounded-lg  rounded-full border-[#71a0c7] bg-[#71a0c7]'>
                SUBMIT 
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Gpapage
