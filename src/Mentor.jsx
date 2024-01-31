import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';


function Mentor() {

  const formik = useFormik({
    initialValues: {

      // here we get the form values by same name and intially empty
      mentorname: "",
      email: "",
      expertIn: ""
    },
    validate: (values) => {

      //validation take place here for every input box based on the conditions it will through error
      // if error occur it will update on object and submit button not work 
      //no error error then only form procced to submit

      let errors = {}


      if (!values.mentorname) {
        errors.mentorname = "Please Enter Mentor Name"
      }

      if (!values.email) {
        errors.email = "Required *"
      }
      if (!values.expertIn) {
        errors.expertIn = "Required *"
      }

      return errors;
    },
    onSubmit: async (values) => {

      try {
        const authorData = await axios.post("https://assigning-mentor-3fh3.onrender.com/mentor", values)
        // dispatch(addAuthorList(authorData.data))
        formik.handleReset()
        // console.log(authorData.data)
        alert("Data posted Successfully")
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
          <h1 className='text-center heading'> Create Mentor </h1>
          <p className='text-muted'>fill the form to add mentor informations</p>
  
        </div>
      </div>
      <hr></hr>
      <div className='row align-items-center justify-content-center'>
        <div className='col-lg-8  '>
  
   
  
          <form onSubmit={formik.handleSubmit} >
            <div className='row'>
              <div className='col-md-8'>
                <label className='label' >Mentor Name : </label>
  
                <input className='form-control'
                  type='text'
                  name="mentorname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  placeholder='Thiru'>
  
                </input>
  
          
                {(formik.getFieldMeta("mentorname").touched && formik.errors.mentorname)
                  ? <span style={{ color: "red" }}>{formik.errors.mentorname}</span> : null}
  
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
                <label className='label' >Expert In : </label>
  
              
  
  
                <input className='form-control mt-3'
                  type='text'
                  name="expertIn"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Program Languages'>
  
                </input>
  
                
  
  
                {(formik.getFieldMeta("expertIn").touched && formik.errors.expertIn)
                  ? <span style={{ color: "red" }}>{formik.errors.expertIn}</span> : null}
  
              </div>
  
            </div>
  
            <button className='btn btn-primary mb-5 mt-4' type="submit" >Submit</button>
          </form>
          </div>
          </div>
          </div>
          
  
      
    )
  
}

export default Mentor