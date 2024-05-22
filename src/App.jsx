import React, { useState } from 'react';
import Info from './components/info.jsx';
import Education from './components/education.jsx';
import Experience from './components/experience.jsx';
import CV from './components/cv.jsx';
import './App.css';

function App() {

    const presetInfo = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890"
    };

    const presetEducation = [
        {
            school: "University of Boston",
            degree: "BSc Computer Science",
            startDate: "2010",
            endDate: "2014",
            location: "Boston"
        },
        {
            school: "University of Nashville",
            degree: "BSc Cyber Security",
            startDate: "2015",
            endDate: "2019",
            location: "Nashville"
        }
    ];

    const presetExperience = [
        {
            company: "Netflix",
            position: "Software Engineer",
            work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt et dolor harum mollitia architecto ea vero corporis officia nemo, suscipit in veritatis laboriosam error culpa repellendus voluptatibus iste maxime.",
            startDate: "2019",
            endDate: "2023",
            location: "San Francisco"
        },
        {
            company: "Apple",
            position: "Junior Software Engineer",
            work: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt et dolor harum mollitia architecto ea vero corporis officia nemo.",
            startDate: "2024",
            endDate: "Current",
            location: "New York"
        }
    ];

    const [info, setInfo] = useState(presetInfo);
    const [education, setEducation] = useState(presetEducation);
    const [experience, setExperience] = useState(presetExperience);

    const updateInfo = (newInfo) => setInfo(newInfo);

    const updateEducation = (newEducation) => {
        setEducation(prev => (prev === presetEducation ? [newEducation] : [...prev, newEducation]));
    };

    const editEducation = (index, updatedEducation) => {
        const updatedEducations = [...education];
        updatedEducations[index] = updatedEducation;
        setEducation(updatedEducations);
    };

    const removeEducation = (index) => {
        const updatedEducations = education.filter((_, i) => i !== index);
        setEducation(updatedEducations);
    };

    const updateExperience = (newExperience) => {
        setExperience(prev => (prev === presetExperience ? [newExperience] : [...prev, newExperience]));
    };

    const editExperience = (index, updatedExperience) => {
        const updatedExperiences = [...experience];
        updatedExperiences[index] = updatedExperience;
        setExperience(updatedExperiences);
    };

    const removeExperience = (index) => {
        const updatedExperiences = experience.filter((_, i) => i !== index);
        setExperience(updatedExperiences);
    };

    return (
        <div className='page'>
            <div className='left'>
                <Info updateInfo={updateInfo} />
                <Education
                    education={education}
                    updateEducation={updateEducation}
                    editEducation={editEducation}
                    removeEducation={removeEducation}
                />
                <Experience
                    experience={experience}
                    updateExperience={updateExperience}
                    editExperience={editExperience}
                    removeExperience={removeExperience}
                />
            </div>
            <div className='right'>
                <CV info={info} education={education} experience={experience} />
            </div>
        </div>
    );
}

export default App;
