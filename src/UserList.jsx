
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UserList() {

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://assigning-mentor-3fh3.onrender.com/assigning");
        console.log(response.data);
        setDetail(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <>
    <div className='container'>
      <div className="card shadow mb-4">
    
          <div className='row text-center'>
        <div className='col-lg-12'>
          <h1 className='text-center heading'> DataTables</h1>
         
  
        </div>
      </div>

<hr/>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Mentor Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {detail.map((data) => (
                  <tr key={data._id}>
                    <td>{data.studentname}</td>
                    <td>{data.mentorname}</td>
                    <td>
                      <Link to={`/assigning_change/${data._id}`} className="btn btn-warning ml-4">
                        Change Mentor
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserList;
