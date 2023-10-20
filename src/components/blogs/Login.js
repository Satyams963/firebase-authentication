import React from 'react';
// import {useState} from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";


function Login() {

 

    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <form className='container mt-3' onSubmit={handleSubmit}>

        <div className="form-group">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
           />
        </div>


        <button type="submit" className="btn btn-primary mt-3">Submit
        </button>

        <div className='mt-3'>
        <small id="emailHelp" className="form-text text-muted">If you haven't registered yet, register here</small>
        <br />
        <button type="submit" className="btn btn-primary">{<Link to="/register" style={{textDecoration:"none", color:"white"}}>Register</Link>}
        </button>
            
        </div>
    </form>
  )
}

export default Login
