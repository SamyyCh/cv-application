import { useState } from 'react';
import '../styles/info.css';

function Info({ updateInfo }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = () => {
        setIsEditing(false);
        updateInfo({ firstName, lastName, email, phone });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className='fullInfo'>
            <div className='infoHeader'>
                <h1>Personal Information</h1>
                <button id='hideInfo' onClick={() => setIsEditing(!isEditing)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>menu-swap-outline</title>
                        <path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" />
                    </svg>
                </button>
            </div>
            {isEditing ? (
                <>
                    <div id='firstName'>First Name</div>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div id='lastName'>Last Name</div>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div id='email'>Email</div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id='phone'>Phone Number</div>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button id='submit' onClick={handleSubmit}>Submit</button>
                </>
            ) : (
                <>
                    <div id='firstName'>{firstName}</div>
                    <div id='lastName'>{lastName}</div>
                    <div id='email'>{email}</div>
                    <div id='phone'>{phone}</div>
                    <button id='edit' onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}

export default Info;
