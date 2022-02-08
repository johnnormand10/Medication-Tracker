function ParentTableList({item}){

    return(
        <tr>
            <td>{item.first_name}</td>
            <td>{item.medication}</td>
            <td>{item.comments}</td>
            <td>{item.dosage}</td>
            <td>{item.howOften}</td>
        </tr>
    )
}

export default ParentTableList;