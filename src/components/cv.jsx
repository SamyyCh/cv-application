import Info from './info.jsx'
import React from 'react';
// import Education from './components/education.jsx'
// import Experience from './components/experience.jsx'
import '../styles/cv.css'

function cv() {
    const info = new Info();

    return (
        <>
        <div className='fullPage'>
            <div className='cvHeader'>
                <div id='fullName'>Samy Chattali</div>
                <div id='cvEmail'>samychattali@me.com</div>
                <div id='cvPhone'>438-929-6161</div>
            </div>
            <div id='cvEduTitle'>Education</div>
            <div className='cvEducation'>
                <div id='cvSchool'>John Abbott School of Business</div>
                <div id='cvDegree'>Bachelor of Science in New Media and Internet Marketing</div>
                <div id='startEndSchool'>2021 - 2023</div>
                <div id='cvLocationSchool'>Montreal</div>
            </div>
            <div className='cvEducation'>
                <div id='cvSchool'>John Abbott School of Business</div>
                <div id='cvDegree'>Bachelor of Science in New Media and Internet Marketing</div>
                <div id='startEndSchool'>2021 - 2023</div>
                <div id='cvLocationSchool'>Montreal</div>
            </div>
                        <div className='cvEducation'>
                <div id='cvSchool'>John Abbott School of Business</div>
                <div id='cvDegree'>Bachelor of Science in New Media and Internet Marketing</div>
                <div id='startEndSchool'>2021 - 2023</div>
                <div id='cvLocationSchool'>Montreal</div>
            </div>
            <div id='cvExpTitle'>Experience</div>
            <div className='cvExperience'>
                <div id='cvCompany'>Netflix</div>
                <div id='cvPosition'>Senior Software Developer</div>
                <div id='startEndWork'>2018 - 2024</div>
                <div id='cvLocationWork'>San Francisco</div>
                <div id='cvWork'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt et dolor harum mollitia architecto ea vero corporis officia nemo, suscipit in veritatis laboriosam error culpa repellendus voluptatibus iste maxime.</div>
            </div>
            <div className='cvExperience'>
                <div id='cvCompany'>Netflix</div>
                <div id='cvPosition'>Senior Software Developer</div>
                <div id='startEndWork'>2018 - 2024</div>
                <div id='cvLocationWork'>San Francisco</div>
                <div id='cvWork'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt et dolor harum mollitia architecto ea vero corporis officia nemo, suscipit in veritatis laboriosam error culpa repellendus voluptatibus iste maxime.</div>
            </div>
            <div className='cvExperience'>
                <div id='cvCompany'>Netflix</div>
                <div id='cvPosition'>Senior Software Developer</div>
                <div id='startEndWork'>2018 - 2024</div>
                <div id='cvLocationWork'>San Francisco</div>
                <div id='cvWork'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt et dolor harum mollitia architecto ea vero corporis officia nemo, suscipit in veritatis laboriosam error culpa repellendus voluptatibus iste maxime.</div>
            </div>
        </div>
        </>
    )
}

export default cv