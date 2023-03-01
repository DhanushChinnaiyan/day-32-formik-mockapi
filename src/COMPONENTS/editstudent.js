
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../BASE/base";
import { studentvalidation } from "./addstudent";


export const EditStudents = ({studentsData,setStudentsData}) => {
  const history = useHistory();
  const {id} = useParams();
  const student = studentsData[id];
  const [idx,setIdx] = useState("")

  useEffect(()=>{
    setIdx(student.id)
  },[student.id])

  const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
          

    initialValues : {
        name:student.name,
        batch:student.batch,
        gender:student.gender,
        experience:student.experience
    },

    validationSchema : studentvalidation ,
    onSubmit : (editedstudent)=>{
      updateStudent(editedstudent)
    }
})

const updateStudent = async(editedstudent) => {

   try {
            

     const response = await fetch (`https://63fde41c19f41bb9f6562d7f.mockapi.io/student/${idx}`,{
       method : "PUT",
       body : JSON.stringify(editedstudent),
       headers : {
        "Content-Type":"application/json"
       }

     });
     const data = await response.json();

     if(data){

      const editedData = studentsData.findIndex((stud) => stud.id === idx);
      studentsData[editedData] = editedstudent;
      setStudentsData([...studentsData])
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
         <form onSubmit={handleSubmit} className="editStudent">
           

         <TextField 
           fullWidth label="Enter Name"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.name}
           name="name"
           id="fullWidth"
           />

          {touched.name && errors.name ? <p style={{color:"red"}}> {errors.name} </p> : ""} 
          <TextField 
           fullWidth label="Enter Batch"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.batch}
           name="batch"
           id="fullWidth"
           />
            {touched.batch && errors.batch ? <p style={{color:"red"}}> {errors.batch} </p> : ""}
           <TextField 
           fullWidth label="Enter Gender"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.gender}
           name="gender"
           id="fullWidth"
           />
            {touched.gender && errors.gender ? <p style={{color:"red"}}> {errors.gender} </p> : ""}
           <TextField 
           fullWidth label="Enter experience"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.experience}
           name="experience"
           id="fullWidth"
           />
        {touched.experience && errors.experience ? <p style={{color:"red"}}> {errors.experience} </p> : ""}
           <Button
           className='addbtn'
           color='secondary'
           variant="contained"
           type='submit'
           >

            Update Student
           </Button>



         </form>
        </Base>
    )
}