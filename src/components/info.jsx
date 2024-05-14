import { useState } from 'react'
import '../styles/info.css'

function info() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + ' ' + lastName;
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    return (
        <>
        <div className='fullInfo'>
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
            <button id='submit'>Submit</button>
        </div>
        </>
    );
}

export default info