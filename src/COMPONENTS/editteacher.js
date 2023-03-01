
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";


export const EditTeacher = ({teachersData,setTeachersData}) => {
  const history = useHistory();
  const {id} = useParams();
  const teacher = teachersData[id];
  const [name,setName] = useState("");
  const [batch,setBatch] = useState("");
  const [gender,setGender] = useState("");
  const [experience,setExperience] = useState("");
  const [idx,setIdx] =useState("")

  useEffect(()=>{
    setIdx(teacher.id)
    setName(teacher.name);
    setBatch(teacher.batch);
    setGender(teacher.gender);
    setExperience(teacher.experience)
  },[teacher.id,teacher.name,teacher.batch,teacher.gender,teacher.experience])


const updateteacher = async() => {

  try {
           
    const updatedObj = { 
      name,
      batch,
      gender,
      experience
  }

    const response = await fetch (`https://63fde41c19f41bb9f6562d7f.mockapi.io/teacher/${idx}`,{
      method : "PUT",
      body : JSON.stringify(updatedObj),
      headers : {
       "Content-Type":"application/json"
      }

    });
    const data = await response.json();

    if(data){

      const editedteacher = teachersData.findIndex((teacher)=> teacher.id === idx)
     teachersData[editedteacher] = updatedObj;
     setTeachersData([...teachersData])
    
    setName("")
    setBatch("")
    setGender("")
    setExperience("")

    history.push("/teachers-list")

    }

  
   
  } catch (error) {
   
   console.log("Error Ocured" , error)

  }
}


    return(
        <Base
        title="Edit Your Profie"
        >
         <div className="editteacher">
            

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
              onClick={updateteacher}
            
            >
                Update Data
            </Button>
         </div>
        </Base>
    )
}