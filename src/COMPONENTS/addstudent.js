
import React  from 'react';
import { Button,TextField } from "@mui/material";
import { useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Base from '../BASE/base';




// schema validations
export const studentvalidation = yup.object({
    name: yup.string().required("Please fill in your name..."),
    batch: yup.string().required("please fill in your batch")
    .min(5,"You need minimum five values"),
    gender : yup.string().required("please mention your gender"),
    experience : yup.number().required("why not tell your experience")
})

const AddStudents = ({studentsData,setStudentsData}) => {

    const {values,handleChange,handleSubmit,handleBlur,errors,touched} = useFormik({
          

        initialValues : {
            name:"",
            batch:"",
            gender:"",
            experience:""
        },

        validationSchema : studentvalidation ,
        onSubmit : (newStudent)=>{
            addNewStudent(newStudent)
        }
    })

    const history =useHistory();


    const addNewStudent = async(newStudent) => {

        try {
     
            const response = await fetch("https://63fde41c19f41bb9f6562d7f.mockapi.io/student",{
                method:"POST",
                body:JSON.stringify(newStudent),
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            const data = await response.json();

            setStudentsData([...studentsData,data])
    
            history.push("/students-list")
            // console.log(data)


        } catch (error) {
            console.log("Error Occure" , error)
        }
    }
     

    return(
        <Base
        title="Add Student"
        >
        
         <form onSubmit={handleSubmit} className='inputfield'>

          

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
           color='success'
           variant="contained"
           type='submit'
           >

            Add Student
           </Button>



         </form>
         
        </Base>
    )
}

export default AddStudents;