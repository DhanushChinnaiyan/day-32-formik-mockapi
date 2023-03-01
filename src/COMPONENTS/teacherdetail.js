
import { Button,Card,CardActions,CardContent,Typography } from "@mui/material";
import React from 'react';
import { useHistory } from "react-router-dom";
import Base from "../BASE/base";


export const TeacherDetails = ({teachersData,setTeachersData}) => {

    const history = useHistory();


    const deleteteachersData = async(teacherId)=>{
        try {
            
          const response = await fetch(`https://63fde41c19f41bb9f6562d7f.mockapi.io/teacher/${teacherId}`,{
            method:"DELETE"
          });

          const data = response.json();
          console.log(data)
          const selectteacher = teachersData.filter((teacher)=>teacher.id !== teacherId);
        setTeachersData(selectteacher);

        } catch (error) {
            console.log("Error Occured",error)
        }
    }

    return(

        <Base
        title="Teachers Details"
        >
             <div className="carddiv">
                    {teachersData.map((teacher,idx)=>{

                        return(

                            <Card  style={{backgroundColor:"rgb(246, 251, 255)" , width:"calc(250px + 8vw)" , cursor:"context-menu"}} key={idx}>
                                <CardContent>
                                    <Typography>
                                    {idx+1}<span style={{fontWeight:"bold"}}>.</span> Name:{teacher.name}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={()=>history.push(`/teacher/${idx}`)} >
                                        VIEW TEACHER
                                    </Button>
                                    
                                    <Button onClick={()=>deleteteachersData(teacher.id)} color="error">
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

























