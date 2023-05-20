// import React from 'react'
import { useState } from 'react'
import thegoal from './Images/thegoal.png'
// import arrow from './Images/arrow.png'

const Thegoal = () => {


    const [study, setstudy] = useState({
        subject: '', gpa: 0, credit: 0
    });
    const [allsetstudy, setallSetSTUDY] = useState([]);


    function handleAddGPAX(event) {
        const { name, value } = event.target;
        if (name === 'gpa' || name === 'credit') {
            setstudy((prevGPAX) => ({
                ...prevGPAX,
                [name]: parseFloat(value),
            }));
            return;
        }
        setstudy((prevGPAX) => ({
            ...prevGPAX,
            [name]: value
        }));
    }

    function addGPAX(event) {
        event.preventDefault();
        console.log("submit");
        // console.log("============================")
        // console.log(study.subject);
        // console.log(study.gpa);
        // console.log(study.credit);
        // console.log("============================")
        console.log(study);
        setallSetSTUDY((prevallSetSTUDY) => {
            return [...prevallSetSTUDY, study];
        })
    }




    return (
        <div className='bg-[#fffded] h-screen'>
            <div>
                <div className='flex justify-center pt-5'>
                    <img src={thegoal} alt="" width="250px" />
                </div>
                <div>
                    <h1>ใส่วิชาและหน่วยกิต</h1>
                    <input type="text" placeholder="Subject" name="subject" onChange={handleAddGPAX} />
                    <input type="number" placeholder="credit" name="credit" onChange={handleAddGPAX} />
                    <input type="number" placeholder='GPA' name="gpa" onChange={handleAddGPAX} />
                    <div>
                        <button type="submit" onClick={addGPAX}>ADD</button>
                    </div>
                </div>
                {allsetstudy.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.subject}</h1>
                            <h1>{item.credit}</h1>
                            <h1>{item.gpa}</h1>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Thegoal