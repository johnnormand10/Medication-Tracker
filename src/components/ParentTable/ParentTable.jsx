import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import SelectChild from '../SelectChild/SelectChild';
import { useEffect, useState } from 'react';
import CertainTableList from '../CertainTableList/CertainTableList';
import swal from 'sweetalert';

//material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

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

   const cancelBtn = () => {
       setBtnStatus(false);
   }

   const removeBtn = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this row of information!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if(willDelete){
                swal("POOF! The row has been deleted!"), {
                    icon: "success",
                }

                dispatch({
                    type: 'DELETE_SELECTED_ITEM',
                    payload: {id: id}
                });
            } else {
                swal("The row of information is safe!")
            }
        });

        console.log('In removeBtn');
   }

   const [buttonStatus, setButtonStatus] = useState(true)
   const changeColor = () => {
        setButtonStatus(!buttonStatus);
        console.log('buttonStatus of checkbox is', buttonStatus);
   }

    return(
        <>
        <div className='medTable'>
            <TableContainer component={Paper}>
            <Table>
                {
                    btnStatus ?
                    <>
                    <TableHead>
                        <TableRow>
                            <TableCell>Medication</TableCell>
                            <TableCell align="right">Comments/Instructions</TableCell>
                            <TableCell align="right">Dosage</TableCell>
                            <TableCell align="right">How Often</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={newId}>
                            <TableCell><TextField id="outlined-basic" size="small" value={newMedication} onChange={(event) => setNewMedication(event.target.value)}/></TableCell>
                            <TableCell align="right"><TextField id="outlined-basic" size="small" value={newComment} onChange={(event) => setNewComment(event.target.value)}/></TableCell>
                            <TableCell align="right"><TextField id="outlined-basic" size="small" value={newDosage} onChange={(event) => setNewDosage(event.target.value)}/></TableCell>
                            <TableCell align="right"><TextField id="outlined-basic" size="small" value={newHowOften} onChange={(event) => setNewHowOften(event.target.value)}/></TableCell>
                            <TableCell align="right"><button className="btn" onClick={handleSave}>Save Changes</button></TableCell>
                            <TableCell align="right"><button className="btn" onClick={cancelBtn}>Cancel Changes</button></TableCell>
                        </TableRow>
                    </TableBody>
                    </>
                        
                    :

                    <>
                    <TableHead>
                        <TableRow>
                            <TableCell>  ☑️ </TableCell>
                            <TableCell align="right">Child Name</TableCell>
                            <TableCell align="right">Medication</TableCell>
                            <TableCell align="right">Comments/Instructions</TableCell>
                            <TableCell align="right">Dosage</TableCell>
                            <TableCell align="right">How Often</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    
                    {data.map(item => (
                        <TableRow key={item.id} id={item.id}>
                            <TableCell><input
                                    type="checkbox"
                                    className='checkbox'
                                    value="Given"
                                />
                            </TableCell>
                            <TableCell align="right">{item.first_name}</TableCell>
                            <TableCell align="right">{item.medication}</TableCell>
                            <TableCell align="right">{item.comments}</TableCell>
                            <TableCell align="right">{item.dosage}</TableCell>
                            <TableCell align="right">{item.how_often}</TableCell>
                            
                                    
                            
                            {user.auth_level === 'Parent' ?
                                <>
                                <TableCell align="right"><button className="btn" onClick={event => handleBtn(item)}>Edit</button></TableCell>
                                <TableCell align="right"><button className="btn" onClick={event => removeBtn(item.id)}>Delete</button></TableCell>
                                </>
                                :
                                <></>
                            }
                        </TableRow>
                    ))}
                    </TableBody>
                    </>
                        
                }
            </Table>
            </TableContainer>
        </div>
        </>
    )
}

export default ParentTable;

