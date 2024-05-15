import { useState } from 'react'
import '../styles/education.css'

function education() {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [isEducationVisible, setIsEducationVisible] = useState(true);

    const toggleEducationVisibility = () => {
        const newIsEducationVisible = !isEducationVisible;
        setIsEducationVisible(newIsEducationVisible);
    };


    return (
        <>
        <div className='education'>
            <div className='educationHeader'>
            <h1>Education</h1>
            <button id='hideEducation' onClick={toggleEducationVisibility}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>menu-swap-outline</title>
                <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" /></svg>
            </button>
            </div>
            {isEducationVisible && (
            <>
            <div id='school'>School Name</div>
            <input
            type="text"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
            />
            <div id='degree'>Degree</div>
            <input
            type="text"
            value={degree}
            onChange={(event) => setDegree(event.target.value)}
            />
            <div id='start'>Start Date</div>
            <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            />
            <div id='end'>End Date</div>
            <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            />
            <div id='location'>Location</div>
            <input
            type='text'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            />
            </>
            )}
        </div>
        <button id='submit'>Submit</button>
        </>
    );
}

export default education