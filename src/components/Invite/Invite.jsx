import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Invite(){
    const [inviteUsername, setUsername] = useState('');
    const [invitePassword, setPassword] = useState('');
    const [inviteFirst, setFirstName] = useState('');
    const [inviteLast, setLastName] = useState('');
    const [parentHelper, setParentHelper] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const inviteUser = (event) => {
        event.preventDefault();

        dispatch({
            type: 'REGISTER',
            payload: {
                username: inviteUsername,
                password: invitePassword,
                firstName: inviteFirst,
                lastName: inviteLast,
                authLevel: parentHelper,
            },
        });
    }; //end inviteUser

    return(
        <form className="formPanel" onSubmit={inviteUser}>
            <h2>Invite User</h2>
            {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )}
            <div>
                <label htmlFor="username">
                    Username:
                    <input 
                        type="text"
                        name="username"
                        value={inviteUsername}
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="firstName">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={inviteFirst}
                        required
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="lastName">
                    Last Name:
                    <input 
                        type="text"
                        name="lastName"
                        value={inviteLast}
                        required
                        onChange={(event) => setLastName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={invitePassword}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="Parent"
                    id="parent"
                    value='Parent'
                    onChange={(event) => setParentHelper(event.target.value)}
                />
                <label htmlFor="parent">Parent</label>  
            </div>
            <div>
                <input
                    type="checkbox"
                    name="Helper"
                    id="helper"
                    value='Helper'
                    onChange={(event) => setParentHelper(event.target.value)}
                />
                <label htmlFor="helper">Helper</label>
            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Submit" />
                <p> Give your Helper the username and password to login!</p>
            </div>
        </form>
    )
}

export default Invite;