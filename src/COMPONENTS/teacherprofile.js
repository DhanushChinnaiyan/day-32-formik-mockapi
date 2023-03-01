
import { Button } from "@mui/material";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const TeacherProfile = ({teachersData}) => {
const {id} = useParams();
const teacher = teachersData[id]
// this is only for reading purpose
// const teacher = teachersData.filter((stud)=>stud.id == id)
const history = useHistory()
return(
    <Base
    title="teacher Profile"
    >
         
        {/* this is only for reading purpose
        <div>
            <h2> teacher Name : {teacher[0].name}</h2>
            <p>Gender : {teacher[0].gender}</p>
            <p>Batch : {teacher[0].batch}</p>
            <p>Experience : {teacher[0].experience}</p>
        </div> */}
       
       <div className="teacherProfile">
            <div> teacher Name : {teacher.name}</div>
            <p>Gender : {teacher.gender}</p>
            <p>Batch : {teacher.batch}</p>
            <p>Experience : {teacher.experience}</p>
            <Button style={{fontSize : "calc(15px + 0.5vw)" , fontWeight:"bold"}} color="secondary" 
            onClick={()=>history.push(`/editteacher/${id}`)}>
             EDIT
            </Button>
        </div>
    
    
    
    </Base>
)
}


















