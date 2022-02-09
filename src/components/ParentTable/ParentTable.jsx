import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ParentTableList from '../ParentTableList/ParentTableList';
import SelectChild from '../SelectChild/SelectChild';
import { useEffect } from 'react';

function ParentTable(){

    const data = useSelector(store => store.tableReducer);
    const names = useSelector(store => store.names);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })

        dispatch({
            type: 'FETCH_DATA'
        })
    }, [dispatch])

    const handleSelect = () => {
        dispatch({
            type: 'CERTAIN_DATA',
            payload: name.first_name
        })
    }

 

    return(
        <>
        <select name="childNames" onChange={handleSelect}>
            {names?.map((name, i) => (
                <option value={name.first_name} key={i}>{name.first_name}</option>
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
                {data?.map(item => (
                    <>
                    <ParentTableList item={item} />
                    </>
                ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ParentTable;