import { useState } from 'react';

const FormGPA = () => {
    const [gpa, setGPA] = useState({
        credit: 0,
        score: 0,
        score2: 0,
    });
    const [allset, setallSet] = useState([]);

    function handleAddGrade(event) {
        const { name, value } = event.target;


        // console.log(name); // Print the name of the input field
        setGPA((prevGPA) => ({
            ...prevGPA,
            [name]: parseInt(value),
        }));

    }

    function addGrade(event) {
        event.preventDefault();
        console.log("submit");
        // console.log("============================")
        // console.log(gpa.credit);
        // console.log(gpa.score);
        // console.log("============================")
        // console.log(gpa);
        if (gpa.score >= 80) {
            gpa.score2 = 4;
        } else if (gpa.score >= 75 && gpa.score<= 79) {
            gpa.score2 = 3.5;
        } else if (gpa.score >= 70 && gpa.score<= 74) {
            gpa.score2 = 3;
        } else if (gpa.score >= 65 && gpa.score<= 69) {
            gpa.score2 = 2.5;
        } else if (gpa.score >= 60 && gpa.score<= 64) {
            gpa.score2 = 2;
        } else if (gpa.score >= 55 && gpa.score<= 59) {
            gpa.score2 = 1.5;
        } else if (gpa.score >= 50 && gpa.score<= 54) {
            gpa.score2 = 1;
        } else {
            gpa.score2 = 0;
        }
        setallSet((prevallSet) => {
            return [...prevallSet, gpa];
        })
    }

    function calculateGPA() {
        let sumCredit = 0;
        let sumScore = 0;
        allset.map((item) => {
            sumCredit += parseInt(item.credit);
            console.log("Credit",sumCredit);
            console.log("so",item.score2);
            sumScore += parseFloat(item.credit) * parseFloat(item.score2);
            console.log("score",sumScore);
        });
        return sumScore / sumCredit;
    }
    



    console.log(gpa);
    return (
        <>
            <div>
                <input type="number" placeholder="CREDIT" name="credit" onChange={handleAddGrade} />
                <input type="number" placeholder="SCORE" name="score" onChange={handleAddGrade} />
                <div>
                    <button type="submit" onClick={addGrade}>ADD</button>
                </div>
            </div>
            <div>
                {allset.map((item, index) => {
                    return (
                        <div key={index} className='bg-red-600 m-10'>
                            <h1>วิชาที่{index + 1}</h1>
                            <h1>{item.credit}</h1>
                            <h1>{item.score}</h1>
                        </div>
                    );
                })}
            </div>
            <div>
                {calculateGPA()}
            </div>
        </>
    );
};

export default FormGPA;
