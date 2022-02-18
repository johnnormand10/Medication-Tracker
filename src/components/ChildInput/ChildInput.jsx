import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ChildInput() {
    const history = useHistory();
    //pull the data from the store
    const names = useSelector(store => store.names);
    //local state
    const [childId, setChildId] = useState('');
    const [comment, setComment] = useState('');
    const [dosage, setDosage] = useState('');
    const [medication, setMedication] = useState('');
    const [howOften, setHowOften] = useState('');

    const dispatch = useDispatch();
    //on load, FETCH_NAME (all the names in the database connected to the user) from the store
    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })
    }, [])
 
    // on form submit function
    const submitChild = (event) => {
        //prevents page refreshing on form completion
        event.preventDefault();
        //sends a request of the payload for a SAGA to catch and execute
        dispatch({
            type: 'CHILD_MEDICATION',
            payload: {
                childId: childId,
                medication: medication,
                comment: comment,
                dosage: dosage,
                howOften: howOften,
            }
        });
        //clear the local state 
        setComment('');
        setDosage('');
        setMedication('');
        setHowOften('');
    };
    //next page button pressed function
    const nextPage = () => {
        history.push('/api/user/table');
    }
    //previous page button pressed function
    const prevPage = () => {
        history.push('/name');
    }


    return(
        <>
        <form className="formPanel" onSubmit={submitChild}>
            <h2>Add Medication</h2>
            <div>
                <select name="childNames" onChange={(event) => setChildId(event.target.value)}>
                    <option value="" disabled selected>Child Names</option>
                    {/* mapping / looping through the names pulled from the store and appending it to the DOM in a dropdown menu */}
                    {names?.map((name) => (
                        <option value={name.id} key={name.id} onChange={(event) => setChildId(event.target.value)}>{name.first_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="medication">
                    Medication Name:
                    <input 
                        type="text"
                        name="medication"
                        value={medication}
                        required
                        onChange={(event) => setMedication(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="comment">
                    Comments/Instructions:
                    <input
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="dosage">
                    Dosage:
                    <input
                        type="text"
                        name="dosage"
                        value={dosage}
                        required
                        onChange={(event) => setDosage(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="howOften">
                    How Often:
                    <input
                        type="text"
                        name="howOften"
                        value={howOften}
                        required
                        onChange={(event) => setHowOften(event.target.value)}
                    />
                </label>
            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Submit" />
            </div>
        </form>

        <button className='nextBtn' onClick={nextPage}>NEXT</button>
        <button className='prevBtn' onClick={prevPage}>PREVIOUS</button>

        </>

    )
}

export default ChildInput;