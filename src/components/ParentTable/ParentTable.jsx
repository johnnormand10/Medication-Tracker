import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ParentTableList from '../ParentTableList/ParentTableList';
import SelectChild from '../SelectChild/SelectChild';
import { useEffect, useState } from 'react';
import CertainTableList from '../CertainTableList/CertainTableList';

function ParentTable(){
    const user = useSelector((store) => store.user);


    const data = useSelector(store => store.tableReducer);
    const certain = useSelector(store => store.CertainTableList);
    const names = useSelector(store => store.names);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })

        dispatch({
            type: 'FETCH_DATA'
        }) 
    }, [])


    const click = () => {
        console.log('edit button clicked');
    }

    return(
        <>
        <select name="childNames" onChange={(event) => dispatch({ type: 'CERTAIN_DATA', payload: {nameId: event.target.value}})}>
                <option value="" disabled selected>Child Names</option>
            {names?.map((name) => (
                <option value={name.id} key={name.id}  onChange={() => dispatch({ type: 'CERTAIN_DATA', payload: {nameId: name.id}})}>{name.first_name}</option>
            ))}
        </select>
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
                {!names.id ?
                    data?.map(item => (
                        <ParentTableList item={item} key={item.id}/>
                    ))
                :
                    certain?.map(item => (
                        <CertainTableList item={item} key={item.id}/>
                    ))
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ParentTable;