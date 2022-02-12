import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import SelectChild from '../SelectChild/SelectChild';
import { useEffect, useState } from 'react';
import CertainTableList from '../CertainTableList/CertainTableList';

function ParentTable(){


    const user = useSelector(store => store.user);
    const data = useSelector(store => store.tableReducer);
    /* const certain = useSelector(store => store.CertainTableList);
    const names = useSelector(store => store.names); */
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState('');
    const [newDosage, setNewDosage] = useState('');
    const [newHowOften, setNewHowOften] = useState('');
    const [newMedication, setNewMedication] = useState('');
    const [newId, setNewId] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })

        dispatch({
            type: 'FETCH_DATA'
        }) 
    }, [])

    const [btnStatus, setBtnStatus] = useState(false);

   const handleBtn = (item) => {
        console.log('in handleBtn');

        setBtnStatus(true);
        console.log('UPDATE btnStatus is:', btnStatus);

        setNewMedication(item.medication);
        setNewComment(item.comments);
        setNewDosage(item.dosage);
        setNewHowOften(item.how_often);
        setNewId(item.id);

   }
  

   const handleSave = () => {
        console.log('in handSave');

        setBtnStatus(false);
        console.log('save btnStatus is:', btnStatus);

        dispatch({
            type: 'UPDATE_ITEM',
            payload: {
                id: newId,
                medication: newMedication,
                comments: newComment,
                dosage: newDosage,
                how_often: newHowOften
            }
        })

   }

   const removeBtn = (id) => {
        console.log('In removeBtn');

        dispatch({
            type: 'DELETE_SELECTED_ITEM',
            payload: {id: id}
        })
   }

    return(
        <>
        {/* <select name="childNames" onChange={(event) => dispatch({ type: 'CERTAIN_DATA', payload: {nameId: event.target.value}})}>
                <option value="" disabled selected>Child Names</option>
            {names?.map((name) => (
                <option value={name.id} key={name.id}  onChange={() => dispatch({ type: 'CERTAIN_DATA', payload: {nameId: name.id}})}>{name.first_name}</option>
            ))}
        </select> */}
        <div>
            <table>
                <thead>
                <tr>
                    <th>Child Name</th>
                    <th>Medication</th>
                    <th>Comments/Instructions</th>
                    <th>Dosage</th>
                    <th>How Often</th>
                </tr>
                </thead>
                <tbody>
                {
                    btnStatus ?
                        <tr key={newId}>
                            <td><input value={newMedication} onChange={(event) => setNewMedication(event.target.value)}></input></td>
                            <td><input value={newComment} onChange={(event) => setNewComment(event.target.value)}></input></td>
                            <td><input value={newDosage} onChange={(event) => setNewDosage(event.target.value)}></input></td>
                            <td><input value={newHowOften} onChange={(event) => setNewHowOften(event.target.value)}></input></td>
                            <td><button onClick={handleSave}>Save Changes</button></td>

                        </tr>
                        
                    :

                    data.map(item => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.medication}</td>
                            <td>{item.comments}</td>
                            <td>{item.dosage}</td>
                            <td>{item.how_often}</td>
                            {user.auth_level === 'Parent' ?
                                <>
                               <td><button onClick={event => handleBtn(item)}>Edit</button></td>
                               <td><button onClick={event => removeBtn(item.id)}>Delete</button></td>
                               </>
                                :
                                <></>
                            }
                        </tr>
                    ))
                        
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ParentTable;