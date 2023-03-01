
import { Button } from "@mui/material";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const StudentProfile = ({studentsData}) => {
const {id} = useParams();
const student = studentsData[id]
// this is only for reading purpose
// const student = studentsData.filter((stud)=>stud.id == id)
const history = useHistory()
return(
    <Base
    title="Student Profile"
    >
         
        {/* this is only for reading purpose
        <div>
            <h2> Student Name : {student[0].name}</h2>
            <p>Gender : {student[0].gender}</p>
            <p>Batch : {student[0].batch}</p>
            <p>Experience : {student[0].experience}</p>
        </div> */}
       
       <div className="studentProfile">
            <div> Student Name : {student.name}</div>
            <p>Gender : {student.gender}</p>
            <p>Batch : {student.batch}</p>
            <p>Experience : {student.experience}</p>
            <Button style={{fontSize : "calc(15px + 0.5vw)" , fontWeight:"bold"}} color="secondary"
             onClick={()=>history.push(`/editstudent/${id}`)}>
             EDIT
            </Button>
        </div>
    
    
    
    </Base>
)
}


















