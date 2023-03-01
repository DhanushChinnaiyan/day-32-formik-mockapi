
import { Button,Card,CardActions,CardContent,Typography } from "@mui/material";
import React from 'react';
import { useHistory } from "react-router-dom";
import Base from "../BASE/base";


export const StudentsDetails = ({studentsData,setStudentsData}) => {

    const history = useHistory();
    

    const deleteStudentsData = async(studId)=>{
        try {
            
            const response = await fetch(`https://63fde41c19f41bb9f6562d7f.mockapi.io/student/${studId}`,{
              method:"DELETE"
            });
  
            const data = response.json();
            console.log(data)
            const selectstudent = studentsData.filter((stud)=>stud.id !== studId);
          setStudentsData(selectstudent);
          
          } catch (error) {
              console.log("Error Occured",error)
          }
    }
   
    

    return(

        <Base
        title="Students Details"
        >
             <div className="carddiv">
                    {studentsData.map((stud,idx)=>{

                        return(

                            <Card  style={{backgroundColor:"rgb(246, 251, 255)" , width:"calc(250px + 8vw)" , cursor:"context-menu"}} key={idx}>
                                <CardContent>
                                    <Typography>
                                     {idx+1}<span style={{fontWeight:"bold"}}>.</span> Name:{stud.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>history.push(`/student/${idx}`)} >
                                        VIEW STUDENT
                                    </Button>
                                    
                                    <Button onClick={()=>deleteStudentsData(stud.id)} color="error">
                                        DELETE
                                    </Button>
                                </CardActions>


                            </Card>
                        )
                    })}
                
            </div>
        
        
        </Base>
    )
}

























