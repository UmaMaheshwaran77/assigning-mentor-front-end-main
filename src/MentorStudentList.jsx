import React,{useState,useEffect} from 'react'
import axios from 'axios';

function MentorStudentList() {

const [mentorName,setMentorName] = useState("");
const [assignedStudent,setAssignedStudent] = useState([]);


const handleShowStudents = async()=>{
    try{
      
        const response = await axios.get(`https://assigning-mentor-3fh3.onrender.com/assigning/mentorname/${mentorName}`);
// console.log(data)
const data = response.data;
if(data  && data.length > 0){
    setAssignedStudent(data);
}else{
    alert("Mentor Name is Incorrect , Correct Mentor Name")
}
    }catch(error){
        console.log(error);
        alert("Something Went Wrong");
    }
}


  return (
    <>
    <div className='container'>
    <div className='row text-center'>
        <div className='col-lg-12'>
          <h1 className='text-center heading'>Students List For Each Mentors</h1>
          <p className='text-muted'>find students how are assigned for particular mentor</p>
  
        </div>
      </div>
      <hr></hr>
        <div className='row'>
            <div className='col-lg-8'>
                <label className='label'>Mentor Name : </label>
                <input type="text"
                value={mentorName}
                onChange={(e)=>setMentorName(e.target.value)} 
                placeholder='Raja Vasanth'>

                 </input>

            </div>
            <div className='col-lg-4'>
                <button className='btn btn-primary'
                onClick={handleShowStudents}>
                    Show Students Assigned
                    </button>
            </div>
        </div>

        {
            assignedStudent.length > 0 && (
                <div className='row mt-4'>
                <div className='col-lg-12'>
                    <h3>Assigned Students:</h3>
                    <ul>
                        {assignedStudent.map((student) => (
                            <li key={student._id}>{student.studentname}</li>
                        ))}
                    </ul>
                </div>
            </div>
            )
        }
       
    </div>
    </>
  )
}

export default MentorStudentList