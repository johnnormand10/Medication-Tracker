import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function SelectChild(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        });
    }, [dispatch]);
    


    const names = useSelector(store => store.names);
    console.log('names in selectChild is', names);

    return(
        <>
            <select name="childNames">
                {names?.map((name, i)  => (
                    <option value={name.first_name} key={i}>{name.first_name}</option>
                ))}
            </select>
        </>
    )
}

export default SelectChild;