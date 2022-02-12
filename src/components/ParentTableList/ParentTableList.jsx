import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function ParentTableList({item, i}){

    const dispatch = useDispatch();

    console.log('item.id is', item.id);
    return(
        <>
        <tr key={i}>
            <td>{item.first_name}</td>
            <td>{item.medication}</td>
            <td>{item.comments}</td>
            <td>{item.dosage}</td>
            <td>{item.how_often}</td>
            <td><Link  to={`/user/${item.id}`}><button onClick={() => dispatch({type: 'SET_CURRENT_MEDICATION', payload: {id: item.id }})}>Edit</button> </Link></td>
        </tr>
        </> 
    )
}

export default ParentTableList;