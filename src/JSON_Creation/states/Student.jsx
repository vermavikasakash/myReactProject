import React from "react"
const Student =(props)=>{
    let data1=props.data
return(<div>
<table border="2px" style={{textAlign:"center"}}>
<tr>
    <th>StudentName</th>
    <th>ID</th>
    <th>Roll No.</th>
    <th>Photo</th>
    <th>Grnder</th>
    <th>Mobile</th>
</tr>
{data1.map((x)=>{
    return <tr>
        <td>{x.studentName}</td>
        <td>{x.studentId}</td>
        <td>{x.studentRoll}</td>
        <td><img src={x.studentPhoto} alt="" style={{height:"150px",width:"150px"}} /></td>
        <td>{x.studentGender}</td>
        <td><ol>{x.studentPhone.map((x)=>{return <li>{x}</li>})}</ol></td>
    </tr>
})}
</table>
</div>)
}
export default Student