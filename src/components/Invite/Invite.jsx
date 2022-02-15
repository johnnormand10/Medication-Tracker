import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Invite.css';

function Invite(){

    const history = useHistory();

    const [inviteUsername, setInviteUsername] = useState('');
    const [invitePassword, setInvitePassword] = useState('');
    const [inviteFirst, setInviteFirstName] = useState('');
    const [inviteLast, setInviteLastName] = useState('');
    const [parentHelper, setInviteParentHelper] = useState('');

    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const inviteUser = (event) => {
        event.preventDefault();
        console.log('submit btn pressed');

        dispatch({
            type: 'INVITE',
            payload: {
                username: inviteUsername,
                password: invitePassword,
                firstName: inviteFirst,
                lastName: inviteLast,
                authLevel: parentHelper,
            }
        });

        setInviteUsername('');
        setInvitePassword('');
        setInviteFirstName('');
        setInviteLastName('');
        setInviteParentHelper('');
    }; //end inviteUser

    function unCheck() {
        let x = document.getElementsByClassName("checkbox");
        for(i=0; i<x.length; i++){
            x[i].checked = false;
        }
    }

    const nextPage = () => {
        history.push('/name');
    }

    const prevPage = () => {
        history.push('/user');
    }

    return(
        <>
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
                        onChange={(event) => setInviteUsername(event.target.value)}
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
                        onChange={(event) => setInviteFirstName(event.target.value)}
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
                        onChange={(event) => setInviteLastName(event.target.value)}
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
                        onChange={(event) => setInvitePassword(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input
                    type="checkbox"
                    className="checkbox"
                    name="Helper"
                    id="helper"
                    value='Helper'
                    onChange={(event) => setInviteParentHelper(event.target.value)}
                />
                <label htmlFor="helper">Helper</label>
            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Submit"  onClick={unCheck}/>
                <p> Give your Helper the username and password to login!</p>
            </div>
        </form>
        <button className='nextBtn' onClick={nextPage}>NEXT</button>
        <button className='prevBtn' onClick={prevPage}>PREVIOUS</button>
        </>
    )
}

export default Invite;
