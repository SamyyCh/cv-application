import { useState } from 'react';
import '../styles/experience.css';

function Experience({ experience, updateExperience, editExperience, removeExperience }) {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [work, setWork] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [isEditing, setIsEditing] = useState(true);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = () => {
        if (editIndex !== null) {
            editExperience(editIndex, { company, position, work, startDate, endDate, location });
        } else {
            updateExperience({ company, position, work, startDate, endDate, location });
        }

        setCompany("");
        setPosition("");
        setWork("");
        setStartDate("");
        setEndDate("");
        setLocation("");
        setIsEditing(true);
        setEditIndex(null);
    };

    const handleEdit = (index) => {
        const exp = experience[index];
        setCompany(exp.company);
        setPosition(exp.position);
        setWork(exp.work);
        setStartDate(exp.startDate);
        setEndDate(exp.endDate);
        setLocation(exp.location);
        setIsEditing(true);
        setEditIndex(index);
    };

    return (
        <div className='experience'>
            <div className='experienceHeader'>
                <h1>Experience</h1>
                <button id='hideExperience' onClick={() => setIsEditing(!isEditing)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>menu-swap-outline</title>
                        <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" />
                    </svg>
                </button>
            </div>
            {isEditing ? (
                <>
                    <div id='company'>Company Name</div>
                    <input
                        type="text"
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                    />
                    <div id='position'>Position</div>
                    <input
                        type="text"
                        value={position}
                        onChange={(event) => setPosition(event.target.value)}
                    />
                    <div id='start'>Start Date</div>
                    <input
                        type="text"
                        placeholder='2018'
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
                    <div id='work'>Main Responsibilities</div>
                    <textarea
                        type="text"
                        value={work}
                        onChange={(event) => setWork(event.target.value)}
                    />
                    <button id='submit' onClick={handleSubmit}>
                        {editIndex !== null ? 'Edit Experience' : 'Add Experience'}
                    </button>
                </>
            ) : (
                <></>
            )}
            <div>
                {experience.map((exp, index) => (
                    <div className='expItem' key={index}>
                        <div id='expCompany'>{exp.company}</div>
                        <div id='expPosition'>{exp.position}</div>
                        <div id='expDates'>{exp.startDate} - {exp.endDate}</div>
                        <div id='expLocation'>{exp.location}</div>
                        <div id='expWork'>{exp.work}</div>
                        <button id='expEdit' onClick={() => handleEdit(index)}>Edit</button>
                        <button id='expDel' onClick={() => removeExperience(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;

