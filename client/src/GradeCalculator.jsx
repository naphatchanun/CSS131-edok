import { useState } from 'react';

const GradeCalculator = () => {
    const [grades, setGrades] = useState([]);
    const [gpa, setGPA] = useState(0);

    const handleAddGrade = (event) => {
        event.preventDefault();
        const grade = event.target.grade.value;
        const credits = event.target.credits.value;

        if (grade && credits) {
            const newGrade = {
                grade: parseFloat(grade),
                credits: parseInt(credits),
            };
            setGrades([...grades, newGrade]);
            event.target.reset();
        }
    };

    const calculateGPA = () => {
        let totalCredits = 0;
        let totalGradePoints = 0;

        grades.forEach((grade) => {
            totalCredits += grade.credits;
            totalGradePoints += grade.grade * grade.credits;
        });

        if (totalCredits > 0) {
            const calculatedGPA = totalGradePoints / totalCredits;
            setGPA(calculatedGPA.toFixed(2));
        } else {
            setGPA(0);
        }
    };

    return (
        <div>
            <h1>GPA Calculator</h1>
            <form onSubmit={handleAddGrade}>
                <label>
                    Grade:
                    <input type="number" name="grade" step="0.01" min="0" max="4" required />
                </label>
                <label>
                    Credits:
                    <input type="number" name="credits" min="1" required />
                </label>
                <button type="submit">Add Grade</button>
            </form>
            <button onClick={calculateGPA}>Calculate GPA</button>
            <h2>GPA: {gpa}</h2>
        </div>
    );
};

export default GradeCalculator;