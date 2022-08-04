import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


function Signout() {
    let navigate=useNavigate()
    const[logged,setLogged]=useState(true)
    let logvar=window.localStorage.getItem("log")

    function handlesignout(){
        navigate("/")
        setLogged(false)
        window.localStorage.removeItem("log")

    }
    useEffect(()=>{
        logvar?(navigate("/logged")):(navigate("/"))
    },[logged])

  return (
    <>
      <h1 className="text-center mt-5">You are logged in</h1>
      <p className="text-center mt-1 ptext">
        Now close the window without signing out and go to the website link
        again
      </p>

      <div className="container buttondiv mt-5">
        <button className="btn btn-warning" onClick={handlesignout}>Signout</button>
      </div>
    </>
  );
}
export default Signout;
