import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useReducer, useState } from "react";
import { sample } from "../App";

const CourseForm = () => {
    const addCourse = useContext(sample)
    //const inputData = {name:"",grd:"A",crd:"1"};
    const [state, dispatch] = useReducer((prevstate, action) => {
        switch (action.type) {
            case 'setname':
                return { ...prevstate, name: action.value }
            case 'setgrd':
                return { ...prevstate, grd: action.value }
            case 'setcrd':
                return { ...prevstate, crd: action.value }
            default: throw new Error();
        }
    }, { name: "", grd: "A", crd: "1" });

    return (
        <>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    addCourse(state)
                }}>
                <td>
                    Credit :
                    <select className="bg-red-200  rounded-5xl p-1 text-left" onChange={e =>
                        //setInputData({...inputData,crd: e.currentTarget.value}) 
                        dispatch({ type: 'setcrd', value: e.currentTarget.value })
                    }>
                        {CREDITS.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </td>
                <td>
                    Grade :
                    <select className="bg-red-200 rounded-5xl p-1 text-left " onChange={e =>
                        //setInputData({...inputData,grd: e.currentTarget.value}) 
                        dispatch({ type: 'setgrd', value: e.currentTarget.value })
                    }>
                        {GRADES.map(item => {
                            return <option value={item.name}>{item.name}</option>
                        })}
                    </select>
                </td>
                <td>
                    ID :
                    <input className="bg-red-200 rounded-5xl p-1 text-left " type="text" onChange={e =>
                        // setInputData({...inputData,name: e.currentTarget.value}) 
                        dispatch({ type: 'setname', value: e.currentTarget.value })
                    } />
                </td>
                <td><button className="bg-blue-500 rounded-2xl p-1 text-left hover:bg-red-200" type="submit">Add</button></td>
            </form>
        </>
    );
};

export default CourseForm;