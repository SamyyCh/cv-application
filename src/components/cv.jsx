import React from 'react';
import '../styles/cv.css';

function CV({ info, education, experience }) {
    return (
        <div className='fullPage'>
            <div className='cvHeader'>
                <div id='fullName'>{info.firstName} {info.lastName}</div>
                <div id='cvEmail'>{info.email}</div>
                <div id='cvPhone'>{info.phone}</div>
            </div>
            <div id='cvEduTitle'>Education</div>
            {education.map((edu, index) => (
                <div className='cvEducation' key={index}>
                    <div id='cvSchool'>{edu.school}</div>
                    <div id='cvDegree'>{edu.degree}</div>
                    <div id='startEndSchool'>{edu.startDate} - {edu.endDate}</div>
                    <div id='cvLocationSchool'>{edu.location}</div>
                </div>
            ))}
            <div id='cvExpTitle'>Experience</div>
            {experience.map((exp, index) => (
                <div className='cvExperience' key={index}>
                    <div id='cvCompany'>{exp.company}</div>
                    <div id='cvPosition'>{exp.position}</div>
                    <div id='startEndWork'>{exp.startDate} - {exp.endDate}</div>
                    <div id='cvLocationWork'>{exp.location}</div>
                    <div id='cvWork'>{exp.work}</div>
                </div>
            ))}
        </div>
    );
}

export default CV;
