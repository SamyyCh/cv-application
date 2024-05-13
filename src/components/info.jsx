import { useState } from 'react'
// import '../styles/info.css'

function info() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const fullName = firstName + ' ' + lastName;

    return (
        <>
        <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        />
        <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        />
        </>
    );
}

export default info