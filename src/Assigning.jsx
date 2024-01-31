import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';

function Assigning() {

  
  
    const formik = useFormik({
        initialValues: {
    
          // here we get the form values by same name and intially empty
          mentorname: "",
        
          studentname: ""
        },
        validate: (values) => {
    
          //validation take place here for every input box based on the conditions it will through error
          // if error occur it will update on object and submit button not work 
          //no error error then only form procced to submit
    
          let errors = {}
    
    
          if (!values.mentorname) {
            errors.mentorname = "Please Enter Mentor Name"
          }
    
          if (!values.studentname) {
            errors.studentname = "Required *"
          }
    
          return errors;
        },
        onSubmit: async (values) => {
    
          try {
            const authorData = await axios.post("https://assigning-mentor-3fh3.onrender.com/assigning", values)
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
          <h1 className='text-center heading'>Assigning Student to Mentor </h1>
          <p className='text-muted'>fill the form to assign mentor to student</p>
  
        </div>
      </div>
      <hr></hr>
      <div className='row align-items-center justify-content-center'>
        <div className='col-lg-8  '>
  
            <form onSubmit={formik.handleSubmit}>
            <div className='row'>
                <div className='col-md-6'>
                    <label  className='label mb-3'> Mentor Name : </label>
                  
                  
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
                <div className='col-md-6'>
                    <label  className='label mb-3' >Student Name : </label>

                    
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
                <div className='row text-center'>
                <button className='btn btn-primary mb-5 mt-4' type="submit" >Submit</button>
                </div>
              
            </div>
            </form>
            </div>
            </div>
        </div>

    )
}

export default Assigning