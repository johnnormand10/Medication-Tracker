import { Link } from 'react-router-dom';

function ParentTableList({item, i}){

    console.log('item.id is', item.id);
    return(
        <>
        <tr key={i}>
            <td>{item.first_name}</td>
            <td>{item.medication}</td>
            <td>{item.comments}</td>
            <td>{item.dosage}</td>
            <td>{item.how_often}</td>
            <td><Link  to={`/api/user/table/${item.id}/edit`}><button>Edit</button> </Link></td>
        </tr>
        </> 
    )
}

export default ParentTableList;