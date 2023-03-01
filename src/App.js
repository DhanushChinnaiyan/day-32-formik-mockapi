

import { useEffect, useState } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import AddStudents from './COMPONENTS/addstudent';
import AddTeachers from './COMPONENTS/addteachers';
import Dashboard from './COMPONENTS/dashboard';
import { EditStudents } from './COMPONENTS/editstudent';
import { EditTeacher } from './COMPONENTS/editteacher';
import { StudentsDetails } from './COMPONENTS/studentdetail';
import { StudentProfile } from './COMPONENTS/studentprofile';
import { TeacherDetails } from './COMPONENTS/teacherdetail';
import { TeacherProfile } from './COMPONENTS/teacherprofile';


function App() {
  const[teachersData,setTeachersData]=useState([])
  const[studentsData,setStudentsData]=useState([])
 
  useEffect(()=>{
       const getStudent = async() => {
        try {
          const response =await fetch ("https://63fde41c19f41bb9f6562d7f.mockapi.io/student" , {
            method:"GET"
          });
          const data =await response.json();
          
          setStudentsData(data)
          
        } catch (error) {
          console.log("Error Occure" , error)
        }
       }

       const getTeacher = async() => {
        try {
          const response = await fetch ("https://63fde41c19f41bb9f6562d7f.mockapi.io/teacher" ,{
            method:"GET"
          });

          const data = await response.json();
          setTeachersData(data)
          
        } catch (error) {
          console.log("Error Occure" , error)
        }
       }
       getStudent(); 
       getTeacher();
  },[])
  

  return (
    <div className="App">
      <Switch>
           <Route path="/dashboard">
              <Dashboard/>
           </Route>
           <Route exact path="/">
            <Redirect to = "/dashboard"/>
           </Route>
           <Route path="/add-student-data">
              <AddStudents
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              
              />
           </Route>
           <Route path="/add-teacher-data">
              <AddTeachers
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              
              />
           </Route>
          <Route path="/students-list">
              <StudentsDetails
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              />
          </Route>
          
          <Route path="/teachers-list">
              <TeacherDetails
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              />
          </Route>
          

          <Route path="/student/:id">
            <StudentProfile
            studentsData={studentsData}
            />
          </Route>

          <Route path="/teacher/:id">
            <TeacherProfile
            teachersData={teachersData}
            />
          </Route>

          <Route path="/editstudent/:id">
            <EditStudents
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            />
          </Route>

          <Route path="/editteacher/:id">
            <EditTeacher
            teachersData={teachersData}
            setTeachersData={setTeachersData}
            />
          </Route>
      </Switch>
    </div>
  );
}

export default App;


