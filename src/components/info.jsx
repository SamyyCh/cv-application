import { useState } from 'react'
import '../styles/info.css'

function info() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + ' ' + lastName;
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isInfoVisible, setIsInfoVisible] = useState(true);

    const toggleInfoVisibility = () => {
        const newIsInfoVisible = !isInfoVisible;
        setIsInfoVisible(newIsInfoVisible);
    };

    return (
        <>
        <div className='fullInfo'>
            <div className='infoHeader'>
                <h1>Personal Information</h1>
                <button id='hideInfo' onClick={toggleInfoVisibility}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>menu-swap-outline</title>
                        <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" /></svg>
                        </button>
            </div>
            {isInfoVisible && (
            <>
            <div id='firstName'>First Name</div>
            <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            />
            <div id='lastName'>Last Name</div>
            <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            />
            <div id='email'>Email</div>
            <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <div id='phone'>Phone Number</div>
            <input
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            />
            </>
            )}
        </div>
        <button id='submit'>Submit</button>
        </>
    );
}

export default info