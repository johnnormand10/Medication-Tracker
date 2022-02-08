import axios from 'axios';
import { useSelector } from 'react-redux';
import ParentTableList from '../ParentTableList/ParentTableList'

function ParentTable(){

    const data = useSelector(store => store.childMedication);



    return(
        <>
        <div>
            <table>
                <tr>
                    <th>Child Name</th>
                    <th>Medication</th>
                    <th>Comments/Instructions</th>
                    <th>Dosage</th>
                    <th>How Often</th>
                </tr>
                {data?.map(item => (
                    <ParentTableList item={item}/>
                ))}
            </table>
        </div>
        </>
    )
}

export default ParentTable;