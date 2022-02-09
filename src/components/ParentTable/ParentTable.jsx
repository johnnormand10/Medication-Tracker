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
    }, [dispatch])

    const handleSelect = () => {
        dispatch({
            type: 'FETCH_DATA'
        })
    }

 

    return(
        <>
        <select name="childNames" onSelect={handleSelect}>
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
                <tr>
                {data?.map(item => (
                    <>
                    <td>{item}</td>
                    <ParentTableList item={item}/>
                    </>
                ))}
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ParentTable;