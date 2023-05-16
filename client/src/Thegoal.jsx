import React from 'react'
import thegoal from './Images/thegoal.png'
import arrow from './Images/arrow.png'

const Thegoal = () => {
  return (
    <div className='bg-[#fffded] h-screen'>
        <div className='flex justify-center pt-5'>
            <img src={thegoal} alt="" width="250px"  />
        </div>
        <div className='pt-5'>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='GPA' className='w-[250px] h-[40px] border-2 border-[#2A2F4F] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#2A2F4F] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#2A2F4F] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#9384D1] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#9384D1] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#9384D1] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#917FB3] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#917FB3] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#917FB3] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#C9A7EB] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#C9A7EB] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#C9A7EB] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#E5BEEC] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#E5BEEC] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#E5BEEC] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#FCC8D1] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#FCC8D1] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#FCC8D1] rounded-lg' />
            </div>
            <div className='flex justify-center gap-28 pt-5'>
                <input type="text" placeholder='Subject' className='w-[250px] h-[40px] border-2 border-[#FDE2F3] rounded-lg' />
                <input type="text" placeholder='Credit' className='w-[60px] h-[40px] border-2 border-[#FDE2F3] rounded-lg'/>
                <img src={arrow} alt="" width="150px" />
                <input type="text" className='w-[60px] h-[40px] border-2 border-[#FDE2F3] rounded-lg' />
            </div>
        </div>

    </div>
  )
}

export default Thegoal