
import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';



function Student() {

  // const dispatch = useDispatch()
  // const data = useSelector((state) => state.app)

  const formik = useFormik({
    initialValues: {

      // here we get the form values by same name and intially empty
      studentname: "",
      email: "",
      course: "",
      phone :""
    },
    validate: (values) => {

      //validation take place here for every input box based on the conditions it will through error
      // if error occur it will update on object and submit button not work 
      //no error error then only form procced to submit

      let errors = {}


      if (!values.studentname) {
        errors.studentname = "Please Enter Mentor Name"
      }

      if (!values.email) {
        errors.email = "Required *"
      }
      if (!values.course) {
        errors.course = "Required *"
      }
      if(!values.phone){
        errors.phone = "Required *"
      }

      return errors;
    },
    onSubmit: async (values) => {

      try {
        const authorData = await axios.post("https://assigning-mentor-3fh3.onrender.com/student", values)
        // dispatch(addAuthorList(authorData.data))
        alert("Data posted Successfully")
        formik.handleReset();
        // console.log(authorData.data)

      } catch (error) {
        console.log("error", error);
        alert("Something went wrong");
      }
    }
  })

  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-lg-12'>
          <h1 className='text-center heading'> Create Student </h1>
          <p className='text-muted'>fill the form to add student informations</p>

        </div>
      </div>
      <hr></hr>
      <div className='row align-items-center justify-content-center'>
        <div className='col-lg-8  '>



          <form onSubmit={formik.handleSubmit} >
            <div className='row'>
              <div className='col-md-8'>
                <label className='label' >Student Name : </label>

                <input className='form-control'
                  type='text'
                  name="studentname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='chandru'>

                </input>


                {(formik.getFieldMeta("studentname").touched && formik.errors.studentname)
                  ? <span style={{ color: "red" }}>{formik.errors.studentname}</span> : null}

              </div>

            </div>

            <div className='row mt-2'>
              <div className='col-md-8'>
                <label className='label' >Email Id : </label>

                <input className='form-control mt-3'
                  type='email'
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='xxxx@gmail.com'>

                </input>



                {(formik.getFieldMeta("email").touched && formik.errors.email)
                  ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null}
              </div>

            </div>
            <div className='row mt-2'>
              <div className='col-md-8'>
                <label className='label' >Course Name : </label>


                <input className='form-control mt-3'
                  type='text'
                  name="course"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Program Languages'>

                </input>




                {(formik.getFieldMeta("course").touched && formik.errors.course)
                  ? <span style={{ color: "red" }}>{formik.errors.course}</span> : null}

              </div>

            </div>

            <div className='row mt-2'>
              <div className='col-md-8'>
                <label className='label' >Phone Number : </label>


                <input className='form-control mt-3'
                  type='text'
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='778890****'>

                </input>




                {(formik.getFieldMeta("phone").touched && formik.errors.phone)
                  ? <span style={{ color: "red" }}>{formik.errors.phone}</span> : null}

              </div>

            </div>

            <button className='btn btn-primary mb-5 mt-4' type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Student