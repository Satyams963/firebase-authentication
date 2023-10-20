import React, {useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';



function Register() {

    const [values , setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.pass) {
            return  setErrorMsg("Please fill all fields")
        }
        setErrorMsg("")

        await createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(res => console.log(res.user))
        .catch(err => console.log(err))
        };

  return (
    <form className='container mt-3' onClick={handleSubmit} >

        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" aria-describedby="name" placeholder="Enter name"
            onChange={(e)=>setValues((prev) => ({...prev, name: e.target.value}))} />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"

            onChange={(e)=>setValues((prev) => ({...prev, email: e.target.value}))} />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
  
            onChange={(e)=>setValues((prev) => ({...prev, pass: e.target.value}))} />
        </div>

        <b>{errorMsg}</b>
        <br />

        <button type='submit' className="btn btn-primary mt-3">
        Register</button>
    </form>
  )
}

export default Register
