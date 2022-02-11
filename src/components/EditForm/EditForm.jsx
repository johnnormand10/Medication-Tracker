import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const activeEdit = useSelector(store => store.tableReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ACTIVE_EDIT',
            payload: params.id
        });
    }, [params.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SAVE_EDIT',
            payload: activeEdit
        });

        history.push('/api/user/table');
    }

    return(
        <>
        <h2>Edit Table Data</h2>
        <form onSubmit={handleSubmit}>
            <input  
                type='text'
                value={activeEdit.medication}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_EDIT',
                    payload: {medication: evt.target.value}
                })}
            />
            <input 
                type='text'
                value={activeEdit.comments}
                placeholder='test'
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_EDIT',
                    payload: {comments: evt.target.value}
                })}
            />
            <input 
                type='text'
                value={activeEdit.dosage}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_EDIT',
                    payload: {dosage: evt.target.value}
                })}
            />
            <input 
                type='text'
                value={activeEdit.how_often}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_ACTIVE_EDIT',
                    payload: {how_often: evt.target.value}
                })}
            />

            <input
                type="submit"
                value="Update Table"
            />
        </form>
        </>
    )
}

export default EditForm;