import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

    const user = useSelector(store => store.user);
    const data = useSelector(store => store.tableReducer);
    /* const certain = useSelector(store => store.CertainTableList);
    const names = useSelector(store => store.names); */
    const dispatch = useDispatch();
    //local state
    const [newComment, setNewComment] = useState('');
    const [newDosage, setNewDosage] = useState('');
    const [newHowOften, setNewHowOften] = useState('');
    const [newMedication, setNewMedication] = useState('');
    const [newId, setNewId] = useState('');
    // on page load... FETCH_NAME(gets names from the store) and FETCH_DATA(gets data from the store)
    useEffect(() => {
        dispatch({
            type: 'FETCH_NAME'
        })

        dispatch({
            type: 'FETCH_DATA'
        }) 
    }, [])
    //local state for the button that controls the edit field
    const [btnStatus, setBtnStatus] = useState(false);
    //handle edit button click function
    const handleBtn = (item) => {
        console.log('in handleBtn');
        //sets the edit button status to true
        setBtnStatus(true);
        //checking what the edit button status is 
        console.log('UPDATE btnStatus is:', btnStatus);
        //set local states to the new edited values
        setNewMedication(item.medication);
        setNewComment(item.comments);
        setNewDosage(item.dosage);
        setNewHowOften(item.how_often);
        setNewId(item.id);

   }
  
   //handle save button function
   const handleSave = () => {
       //checking if I made it to the function
        console.log('in handSave');
        //setting the edit button status to false 
        setBtnStatus(false);
        //checking what the edit button status is 
        console.log('save btnStatus is:', btnStatus);
        //sending a SAGA request to execute 
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
   //cancel button clicked function
   const cancelBtn = () => {
       //sets the edit button status to false
       setBtnStatus(false);
   }
   //delete button clicked function
   const removeBtn = (id) => {
        //sweet alert for confirmation of delete 
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
                //sending a SAGA request to execute
                dispatch({
                    type: 'DELETE_SELECTED_ITEM',
                    payload: {id: id}
                });
            } else {
                swal("The row of information is safe!")
            }
        });
        //checking to see if I made it to the function
        console.log('In removeBtn');
   }

   //previous page button pressed function
    const prevPage = () => {
        history.push('/api/user/medication');
    }
   
    return(
        <>
        <div className='medTable'>
            <TableContainer component={Paper}>
            <Table>
                {
                    /* checking what the button status is */
                    btnStatus ?
                    <>
                    {/* if the button status is true appending the edit view on the DOM */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Medication</TableCell>
                            <TableCell align="right" className='tableRow'>Comments/Instructions</TableCell>
                            <TableCell align="right" className='tableRow'>Dosage</TableCell>
                            <TableCell align="right" className='tableRow'>How Often</TableCell>
                            <TableCell align="right" className='tableRow'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={newId}>
                            <TableCell className='tableCell'><TextField id="outlined-basic" size="small" value={newMedication} onChange={(event) => setNewMedication(event.target.value)}/></TableCell>
                            <TableCell align="right" className='tableCell'><TextField id="outlined-basic" size="small" value={newComment} onChange={(event) => setNewComment(event.target.value)}/></TableCell>
                            <TableCell align="right" className='tableCell'><TextField id="outlined-basic" size="small" value={newDosage} onChange={(event) => setNewDosage(event.target.value)}/></TableCell>
                            <TableCell align="right" className='tableCell'><TextField id="outlined-basic" size="small" value={newHowOften} onChange={(event) => setNewHowOften(event.target.value)}/></TableCell>
                            <TableCell align="right"><button className="btn" onClick={handleSave}>Save Changes</button></TableCell>
                            <TableCell align="right"><button className="btn" onClick={cancelBtn}>Cancel Changes</button></TableCell>
                        </TableRow>
                    </TableBody>
                    </>
                        
                    :
                    /* if the button status is false, appending the table on the DOM */
                    <>
                    <TableHead>
                        <TableRow>
                            <TableCell>  ☑️ </TableCell>
                            <TableCell align="right" className='tableCell'>Child Name</TableCell>
                            <TableCell align="right" className='tableCell'>Medication</TableCell>
                            <TableCell align="right" className='tableCell'>Comments/Instructions</TableCell>
                            <TableCell align="right" className='tableCell'>Dosage</TableCell>
                            <TableCell align="right" className='tableCell'>How Often</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* mapping / looping through the data pulled from the store and appending it in the table */}
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
                            
                                    
                            {/* this appends only if the user auth_level is Parent */}
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
        <button className='prevBtn' onClick={prevPage}>PREVIOUS</button>
        </>
    )
}

export default ParentTable;


