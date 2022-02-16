import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Invite.css';

function Invite(){

    const history = useHistory();
    const dispatch = useDispatch();
    //local state
    const [inviteUsername, setInviteUsername] = useState('');
    const [invitePassword, setInvitePassword] = useState('');
    const [inviteFirst, setInviteFirstName] = useState('');
    const [inviteLast, setInviteLastName] = useState('');
    const [parentHelper, setInviteParentHelper] = useState('');

    const errors = useSelector((store) => store.errors);
    //invite user input function
    const inviteUser = (event) => {
        //prevents page reload
        event.preventDefault();
        //making sure I made it to the function
        console.log('submit btn pressed');
        //sending a request to SAGA to execute
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
        //clearing local state
        setInviteUsername('');
        setInvitePassword('');
        setInviteFirstName('');
        setInviteLastName('');
        setInviteParentHelper('');
    }; //end inviteUser
    //testing to see if I could get the checkbox to uncheck
    function unCheck() {
        let x = document.getElementsByClassName("checkbox");
        for(i=0; i<x.length; i++){
            x[i].checked = false;
        }
    }
    //next page button pressed function
    const nextPage = () => {
        history.push('/name');
    }
    //previous page button pressed function
    const prevPage = () => {
        history.push('/user');
    }

    return(
        <>
        <form className="formPanel" onSubmit={inviteUser}>
            <h2>Invite User</h2>
            {/* if there is an error the alert will be shown */}
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
