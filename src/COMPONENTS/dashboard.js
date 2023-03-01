import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../BASE/base'

const DashBoard = () => {
  const history = useHistory();
  return (
    <Base
    title = "Welcome To Teachers And Students App"
    >
      <br/>
        <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/students-list")}
        style={{marginRight:"10px"}}
        >
        Student Page
        </Button>
        <Button 
        variant='outlined'
        color='primary'
        size = "large"
        onClick={()=>history.push("/teachers-list")}
        >
        Teacher Page
        </Button>
     </Base>
  )
}

export default DashBoard