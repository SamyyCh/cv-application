import { useState } from 'react'
// import '../styles/info.css'

function education() {
    const [school, setSchool] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");


    return (
        <>
        <div className='education'>
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
            <button id='submit'>Submit</button>
        </div>
        </>
    );
}

export default education