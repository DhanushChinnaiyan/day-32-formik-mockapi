import React from 'react';
import {AppBar,Button,Toolbar} from '@mui/material'
import { useHistory } from 'react-router-dom';




const Base = ({title,children}) => {
   const history = useHistory()

  

    return(
         <div className='mainComponent base'>


            <AppBar position='static'>
                <Toolbar variant='dense'>



                    <Button color='inherit' style={{fontSize:"calc(7px + 0.5vw)"}}
                    onClick={()=>history.push("/dashboard")}
                    >

                        <div>Dashboard</div>

                    </Button>




                    <Button color='inherit' style={{fontSize:"calc(7px + 0.5vw)"}}
                    onClick={()=>history.push("/students-list")}
                    >

                        <div>Students List</div>

                    </Button>




                    <Button color='inherit' style={{fontSize:"calc(7px + 0.5vw)"}}
                     onClick={()=>history.push("/add-student-data")}
                     >

                        <div>Add Student</div>

                    </Button>


                    <Button color='inherit' style={{fontSize:"calc(7px + 0.5vw)"}}
                    onClick={()=>history.push("/teachers-list")}
                    >

                        <div>Teachers List</div>

                    </Button>


                    

                    <Button color='inherit' style={{fontSize:"calc(7px + 0.5vw)"}}
                     onClick={()=>history.push("/add-teacher-data")}
                     >

                        <div>Add Teacher</div>

                    </Button>

                </Toolbar>
            </AppBar>



            <header>
                <div className='title'>{title}</div>
            </header>

            <div>
                {children}
            </div>

         </div>

    )
}

export default Base