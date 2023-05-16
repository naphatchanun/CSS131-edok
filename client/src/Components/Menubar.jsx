import React from "react";
import Logo from '../Images/calculator.png'


function Menubar() {
    return (
        <><div className="bg-[#E5BEEC]">
            <div className="flex justify-between items-center h-[100px] bg-[#CBBCDC] text-black container mx-auto px-[100px]">
                <img src={Logo} alt="" width="70px"/>
                <ul className="text-[18px] flex gap-10 justify-between items-center">
                    <li className="border-2 p-2 rounded-full border-[#71a0c7] bg-[#71a0c7] ">
                        <a href="/">HOME</a>
                    </li>
                    <li className="border-2 p-2 rounded-full border-[#71a0c7] bg-[#71a0c7] ">
                        <a href="/GPApage">GPAX/GPA</a>
                    </li>
                    <li className="border-2 p-2 rounded-full border-[#71a0c7] bg-[#71a0c7] ">
                        <a href="/TheGoalpage">THE GOAL</a>
                    </li>
                    <li className="border-2 p-2   rounded-full border-[#71a0c7] bg-[#71a0c7] ">
                        <a href="/Contact">CONTACT</a>
                    </li>
                </ul>
                <img src={Logo} alt="" width="70px"/>
            </div>
        </div>
        </>
    );
}

export default Menubar;