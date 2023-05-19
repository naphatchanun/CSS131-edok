// import React from 'react'
import { useState } from 'react'
import thegoal from './Images/thegoal.png'
// import arrow from './Images/arrow.png'

const Thegoal = () => {

    const [datalearnning ,setDatalearnning] = useState({
        Subject: '', credit : 0
    })


    return (
        <div className='bg-[#fffded] h-screen'>
            <div className='flex justify-center pt-5'>
                <img src={thegoal} alt="" width="250px" />
            </div>
            <div>
                <h1>ใส่วิชาและหน่วยกิต</h1>
                <input type="text" placeholder="Subject"/>
                <input type="number" placeholder="credit"  />
                <div>
                    <button type="submit" >ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Thegoal