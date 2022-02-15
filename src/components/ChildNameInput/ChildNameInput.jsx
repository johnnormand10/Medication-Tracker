import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ChildNameInput(){

    const history = useHistory();

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

    const nextPage = () => {
        history.push('/api/user/medication');
    }

    const prevPage = () => {
        history.push('/api/user/invite');
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

        <button className='nextBtn' onClick={nextPage}>NEXT</button>
        <button className='prevBtn' onClick={prevPage}>PREVIOUS</button>

        </>
    )
}

export default ChildNameInput;