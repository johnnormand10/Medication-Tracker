import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function ChildInput() {

    const names = useSelector(store => store.names);

    const [childId, setChildId] = useState('');
    const [comment, setComment] = useState('');
    const [dosage, setDosage] = useState('');
    const [medication, setMedication] = useState('');
    const [howOften, setHowOften] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })
    }, [])

    const submitChild = (event) => {
        event.preventDefault();

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

        setComment('');
        setDosage('');
        setMedication('');
        setHowOften('');
    };


    return(
        <>
        <form className="formPanel" onSubmit={submitChild}>
            <h2>TBD</h2>
            <div>
                <select name="childNames" onChange={(event) => setChildId(event.target.value)}>
                    <option value="" disabled selected>Child Names</option>
                    {names?.map((name) => (
                        <option value={name.id} key={name.id} onChange={(event) => setChildId(event.target.value)}>{name.first_name}</option>
                    ))}
                </select>
                {/* <label htmlFor="childName">
                    Child:
                    <input 
                        type="text"
                        name="child"
                        value={childName}
                        required
                        onChange={(event) => setChildName(event.target.value)}
                    />
                </label> */}
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
        </>

    )
}

export default ChildInput;