import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';



function EditForm(){
    const dispatch = useDispatch();
    const history = useHistory();

    const item = useSelector(store => store.currentMedication);
    console.log('item is', item);

    const [medicationName, setMedicationName] = useState(item[0].medication);
    const [comments, setComments] = useState(item[0].comments);
    const [dosage, setDosage] = useState(item[0].dosage);
    const [howOften, setHowOften] = useState(item[0].how_often);
    

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SAVE_EDIT',
            payload:{
                id: item[0].id,
                medication: medicationName,
                comments: comments,
                dosage, dosage, 
                how_often: howOften
            }
        });

        history.push('/api/user/table');
    };

    const handleDelete = ({item}) => {
        dispatch({
            type: 'DELETE_ROW',
            payload: item
        })
    }

    return(
        <>
        <h2>Edit Table Data</h2>
            <form onSubmit={handleSubmit}>
                <>
                <input  
                    type='text'
                    value={medicationName}
                    onChange={(event) => setMedicationName(event.target.value)}
                />
                <input 
                    type='text'
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />
                <input 
                    type='text'
                    value={dosage}
                    onChange={(event) => setDosage(event.target.value)}
                />
                <input 
                    type='text'
                    value={howOften}
                    onChange={(event) => setHowOften(event.target.value)}
                />

                <button onClick={handleDelete}>Delete</button>

                <input
                    type="submit"
                    value="Update Table"
                />
                </>
            </form>
        </>
    )
}

export default EditForm;