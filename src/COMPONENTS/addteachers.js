import React , {useState} from 'react';
import { Button,TextField } from "@mui/material";
import { useHistory } from 'react-router-dom';
import Base from '../BASE/base';


const AddTeachers = ({teachersData,setTeachersData}) => {

    const history =useHistory();

    const[values,setValues] = useState({
        
        name:"",
        batch:"",
        gender:"",
        experience:""
    })

    const{
        
        name,
        batch,
        gender,
        experience} = values;
    

   const handlechange = (name) => (event) => {
            const value = event.target.value;
            setValues({...values,[name]:value})
        }

        const addNewTeacher = async() => {

            try {
                
                const newTeacher = {
                    
                    name,
                    batch,
                    gender,
                    experience
                }
         
                const response = await fetch("https://63fde41c19f41bb9f6562d7f.mockapi.io/teacher",{
                    method:"POST",
                    body:JSON.stringify(newTeacher),
                    headers : {
                        "Content-Type" : "application/json"
                    }
                });
    
                const data = await response.json();
    
                setTeachersData([...teachersData,data])
        
                setValues({
                    ...values,
                    
                    name:"",
                    batch:"",
                    gender:"",
                    experience:""
                })
        
                history.push("/teachers-list")
                console.log(data)
    
    
            } catch (error) {
                console.log("Error Occure" , error)
            }
        }
     

    return(
        <Base
        title="Add Teacher"
        >
         <div className='inputfield'>

          <TextField 
           fullWidth label="Enter Name"
           onChange={handlechange("name")}
           value={name}
           name="name"
           id="fullWidth"
           />

           
          <TextField 
           fullWidth label="Enter Batches"
           onChange={handlechange("batch")}
           value={batch}
           name="batch"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter Gender"
           onChange={handlechange("gender")}
           value={gender}
           name="gender"
           id="fullWidth"
           />
           <TextField 
           fullWidth label="Enter experience"
           onChange={handlechange("experience")}
           value={experience}
           name="experience"
           id="fullWidth"
           />

           <Button
           
           className='addbtn'
           color='success'
           variant="contained"
           onClick={addNewTeacher}
        
           >

            Add Teacher
           </Button>



         </div>
        </Base>
    )
}

export default AddTeachers;