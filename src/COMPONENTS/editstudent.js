
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const EditStudents = ({studentsData,setStudentsData}) => {
  const history = useHistory();
  const {id} = useParams();
  const student = studentsData[id];
  const [name,setName] = useState("");
  const [batch,setBatch] = useState("");
  const [gender,setGender] = useState("");
  const [experience,setExperience] = useState("");
  const [idx,setIdx] = useState("")

  useEffect(()=>{
    setIdx(student.id)
    setName(student.name);
    setBatch(student.batch);
    setGender(student.gender);
    setExperience(student.experience)
  },[student.id,student.name,student.batch,student.gender,student.experience])

const updateStudent = async() => {

   try {
            
     const updatedObj = {
      name,
      batch,
      gender,
      experience
     }

     const response = await fetch (`https://63fde41c19f41bb9f6562d7f.mockapi.io/student/${idx}`,{
       method : "PUT",
       body : JSON.stringify(updatedObj),
       headers : {
        "Content-Type":"application/json"
       }

     });
     const data = await response.json();

     if(data){

      const editedData = studentsData.findIndex((stud) => stud.id === idx);
      studentsData[editedData] = updatedObj;
      setStudentsData([...studentsData])
      setName("")
      setBatch("")
      setGender("")
      setExperience("")

      history.push("/students-list")

     }

   
    
   } catch (error) {
    
    console.log("Error Ocured" , error)

   }
}



    return(
        <Base
        title="Edit Your Profie"
        >
         <div className="editStudent">
           

            <TextField
            fullWidth label="Enter Name"
            onChange={(event)=>setName(event.target.value)}
            value={name}
            />

            <TextField
            fullWidth label="Enter Batch"
            onChange={(event)=>setBatch(event.target.value)}
            value={batch}
            />

            <TextField
            fullWidth label="Enter Gender"
            onChange={(event)=>setGender(event.target.value)}
            value={gender}
            />

            <TextField
            fullWidth label="Enter Experience"
            onChange={(event)=>setExperience(event.target.value)}
            value={experience}
            />

            <Button 
              color="secondary"
              variant="contained"
              onClick={updateStudent}
            
            >
                Update Data
            </Button>
         </div>
        </Base>
    )
}