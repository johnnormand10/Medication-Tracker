import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ChildInput() {
    const [childName, setChildName] = useState('');
    const [comment, setComment] = useState('');
    const [dosage, setDosage] = useState('');
    const [medication, setMedication] = useState('');
    const [howOften, setHowOften] = useState('');

    const dispatch = useDispatch();

    const submitChild = (event) => {
        event.preventDefault();

        dispatch({
            type: 'CHILD_MEDICATION',
            payload: {
                childName: childName,
                medication: medication,
                comment: comment,
                dosage: dosage,
                howOften: howOften,
            }
        });

        setChildName('');
        setComment('');
        setDosage('');
        setMedication('');
        setHowOften('');
    };


    return(
        <form className="formPanel" onSubmit={submitChild}>
            <h2>TBD</h2>
            <div>
                <label htmlFor="childName">
                    Child:
                    <input 
                        type="text"
                        name="child"
                        value={childName}
                        required
                        onChange={(event) => setChildName(event.target.value)}
                    />
                </label>
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

    )
}

export default ChildInput;