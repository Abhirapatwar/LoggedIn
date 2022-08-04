import React from "react";
import "../Components/Main.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    let navigate=useNavigate()

    function handlesubmit(event){
        event.preventDefault()
        window.localStorage.setItem("log",true)
        navigate("/logged")
    }


  return (
    <>
      <h1 className="mt-3 text-center titlepart">Login Page</h1>
      <div className="container box1 mt-5">
        <div className="row">
          <div className="col-md-4 box2 pt-5 shadow shadow-lg">
            <form>
              <div className="mb-3 ">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
