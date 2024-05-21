import React, { useState } from 'react';
import Info from './components/info.jsx';
import Education from './components/education.jsx';
import Experience from './components/experience.jsx';
import CV from './components/cv.jsx';
import './App.css';

function App() {
    const [info, setInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const updateInfo = (newInfo) => setInfo(newInfo);

    const updateEducation = (newEducation) => setEducation([...education, newEducation]);

    const editEducation = (index, updatedEducation) => {
        const updatedEducations = [...education];
        updatedEducations[index] = updatedEducation;
        setEducation(updatedEducations);
    };

    const removeEducation = (index) => {
        const updatedEducations = education.filter((_, i) => i !== index);
        setEducation(updatedEducations);
    };

    const updateExperience = (newExperience) => setExperience([...experience, newExperience]);

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
