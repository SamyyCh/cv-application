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
    const updateExperience = (newExperience) => setExperience([...experience, newExperience]);

    return (
        <div className='page'>
            <div className='left'>
                <Info updateInfo={updateInfo} />
                <Education updateEducation={updateEducation} />
                <Experience updateExperience={updateExperience} />
            </div>
            <div className='right'>
                <CV info={info} education={education} experience={experience} />
            </div>
        </div>
    );
}

export default App;
