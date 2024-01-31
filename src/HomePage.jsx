import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
    <div className='container-fluid'>
      <div className=' home-container'>
      <div className='row text-center '>
        <h1 className='heading mt-5 mb-3'>Web Developer Task</h1>
        <p className='text-muted'>Mentor And Student Assigning With Database!!!</p>
      </div>
      <hr />
      <div className='row mt-4 mb-5 align-items-center justify-content-center'>
        <div className='col-md-4'>
          <div class="card text-center ms-5" style={{ width: "18rem" }}>
            <div class="card-body ">
              <Link to="/student" ><h5 class="card-title mb-3">Create Student 🎓🎓</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">become a student by adding student details</h6>
              <p class="card-text mb-5"> Our Program will enhance your knowledge join as our student immediately and grow together !🎓!</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div class="card text-center" style={{ width: "18rem" }}>
            <div class="card-body">
              <Link to="/mentor" ><h5 class="card-title mb-3">Create Mentor 🧑‍🏫🧑‍🏫</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">become a mentor by adding mentor details</h6>
              <p class="card-text mb-4">Our Programming and team  will enhance your knowledge more by joining as mentor for our wonderful students , grow together !! 👑</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div class="card text-center" style={{ width: "18rem" }}>
            <div class="card-body">
              <Link to="/assigning" ><h5 class="card-title mb-3">Assign Student to Mentor 🧑‍🎓👩‍🏫</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">assigning multiple students to a mentor </h6>
              <p class="card-text mb-4">Through direct connect with students and mentor , you can assign student ,mentor with this ! 🎊</p>
            </div>
          </div>
        </div>
        </div>
        <div className='row mt-4 mb-5 align-items-center justify-content-center '>
        <div className='col-md-4 mb-5   '>
          <div class="card mt-4 text-center ms-5" style={{ width: "18rem" }}>
            <div class="card-body">
              <Link to="/userlist" ><h5 class="card-title mb-3">Assigned Students List  📃📃</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">assigned students are listed here</h6>
              <p class="card-text mb-2">Students joined with us are listed here and you also become a good factor for here!! 🎉✨</p>
            </div>
          </div>
        </div>
      
        <div className='col-md-4 mb-5'>
          <div class="card mt-4 text-center" style={{ width: "18rem" }}>
            <div class="card-body">
              <Link to="/mentor_student_list" ><h5 class="card-title mb-3">Mentor Assigned Student List  📃👩‍🏫🧑‍🎓</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">assigned students list for particular mentor</h6>
              <p class="card-text mb-2">Each mentor have many students and their lists are get here !! 🎀🎊</p>
            </div>
          </div>
        </div>
        <div className='col-md-4  mb-5'>
          <div class="card mt-4 text-center" style={{ width: "18rem" }}>
            <div class="card-body">
              <Link to="/previous_mentor" ><h5 class="card-title mb-3">Previous Assigned Mentors  ◀️👩‍🏫</h5></Link>
              <h6 class="card-subtitle mb-2 text-body-secondary mb-4">assigned mentors name for students previously</h6>
              <p class="card-text mb-2">Previous assigned mentor name are here for the students how got changed their mentor! 🎗️🎉👑</p>
            </div>
          </div>
        </div>


      </div>
      </div>
     
    </div>
 <Footer />
  </>
  )
}

export default HomePage