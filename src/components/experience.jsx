import { useState } from 'react'
import '../styles/experience.css'

function experience() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [work, setWork] = useState("");
    const [isExperienceVisible, setIsExperienceVisible] = useState(true);

    const toggleExperienceVisibility = () => {
        const newIsExperienceVisible = !isExperienceVisible;
        setIsExperienceVisible(newIsExperienceVisible);
    };


    return (
        <>
        <div className='experience'>
        <div className='experienceHeader'>
            <h1>Experience</h1>
            <button id='hideExperience' onClick={toggleExperienceVisibility}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>menu-swap-outline</title>
                <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" /></svg>
            </button>
            </div>
            {isExperienceVisible && (
            <>
            <div id='company'>Company Name</div>
            <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            />
            <div id='position'>Position Title</div>
            <input
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            />
            <div id='start'>Start Date</div>
            <input
            type="text"
            placeholder='2020'
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            />
            <div id='end'>End Date</div>
            <input
            type="text"
            placeholder='2024'
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            />
            <div id='location'>Location</div>
            <input
            type='text'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            />
            <div id='work'>Work Description</div>
            <textarea
            id='workBox'
            type='text'
            value={work}
            onChange={(event) => setWork(event.target.value)}
            />
            </>
            )}
        </div>
        <div className='buttons'>
            <button id='submit'>Submit</button>
            <button id='delete'>Delete</button>
        </div>
        </>
    );
}

export default experience