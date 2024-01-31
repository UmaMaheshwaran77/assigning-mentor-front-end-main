
import React, { useState } from 'react';
import axios from 'axios';

function PreviousMentor() {
  const [studentName, setStudentName] = useState("");
  const [previousMentor, setPreviousMentor] = useState(null);

  const handleShowStudents = async () => {
    try {
      const response = await axios.get(`https://assigning-mentor-3fh3.onrender.com/previous_mentor/${studentName}`);
      const data = response.data;

      if (data && Object.keys(data).length > 0) {
        setPreviousMentor(data);
      } else {
        alert("Mentor Name is Incorrect, Correct Mentor Name");
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  }

  return (
    <>
      <div className='container'>
      <div className='row text-center'>
        <div className='col-lg-12'>
          <h1 className='text-center heading'> Previously Assigned Mentor </h1>
          <p className='text-muted'>find previously assigned mentor name only it is changed for any student</p>
  
        </div>
      </div>
      <hr></hr>
        <div className='row'>
          <div className='col-lg-8'>
            <label className='label'>Student Name : </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            placeholder='Madhan' />
          </div>
          <div className='col-lg-4'>
            <button className=' btn btn-primary' onClick={handleShowStudents}>
              Show Students Assigned
            </button>
          </div>
        </div>

        {previousMentor && (
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <h3>Assigned Mentor Previously:</h3>
              <p>{previousMentor.mentorname}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PreviousMentor;



