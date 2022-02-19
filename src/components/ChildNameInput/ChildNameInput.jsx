import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ChildNameInput(){

    const history = useHistory();
    const dispatch = useDispatch();
    //local state
    const [childName, setChildName] = useState('');
    //submit name input function
    const submitName = (event) => {
        //prevents page refresh
        event.preventDefault();
        //sends a request to SAGA to execute
        dispatch({
            type: 'ADD_CHILD_NAME',
            payload: {
                childName: childName
            }
        });
        //clear the local state
        setChildName('');
    }
    //next page button pressed function
    const nextPage = () => {
        history.push('/api/user/medication');
    }
    //next previous button pressed function
    const prevPage = () => {
        history.push('/api/user/invite');
    }
    
    const demoData = () => {
        setChildName('Matthew');
    }

    return (
        <>
        <form className="formPanel" onSubmit={submitName}>
            <h2 onClick={demoData}>Child Name</h2>
            <div>
                <label htmlFor="childName">
                    Name:
                    <input
                        type="text"
                        name="Name"
                        value={childName}
                        required
                        onChange={(event) => setChildName(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input className='btn' type='submit' name='submit' value='submit'/>
            </div>
        </form>

        <button className='nextBtn' onClick={nextPage}>NEXT</button>
        <button className='prevBtn' onClick={prevPage}>PREVIOUS</button>

        </>
    )
}

export default ChildNameInput;