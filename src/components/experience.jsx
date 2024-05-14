import { useState } from 'react'
// import '../styles/info.css'

function experience() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [work, setWork] = useState("");


    return (
        <>
        <div className='experience'>
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
            <div id='work'>Work Description</div>
            <input
            type='text'
            value={work}
            onChange={(event) => setWork(event.target.value)}
            />
            <button id='submit'>Submit</button>
        </div>
        </>
    );
}

export default experience