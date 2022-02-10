import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ChildNameInput(){

    const [childName, setChildName] = useState('');

    const dispatch = useDispatch();

    const submitName = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_CHILD_NAME',
            payload: {
                childName: childName
            }
        });

        setChildName('');
    }

    return (
        <>
        <form className="formPanel" onSubmit={submitName}>
            <h2>Child Name</h2>
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
        </>
    )
}

export default ChildNameInput;