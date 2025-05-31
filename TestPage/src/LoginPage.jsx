import { useState } from "react";
import { Link } from 'react-router-dom'

function Login(){

const [pwd1, setPwd1] = useState("");
const [pwd2, setPwd2] = useState("");
const [notMatch, setNotMatch] = useState(false);

function handlePwd1Change(event){
  setPwd1(event.target.value);
};
function handlePwd2Change(event){
    setPwd2(event.target.value);
    if( pwd1 === event.target.value) { 
      setNotMatch(!true);
    }else{ 
        setNotMatch(true);
        const check = document.getElementById("exampleCheck1");
        check.checked = false;
        };
};
function handleCheck(event){
  // console.log(event.target.checked);
  if(event.target.checked){
    if( pwd1 === pwd2) { 
      event.target.checked = true;
    }else{ 
        event.target.checked = false;
        setNotMatch(true);
        };
  }

};

const [submited,setSubmited] = useState(false);

function handleSubmit(event){
    event.preventDefault();
    const email = document.getElementById("exampleInputEmail1");
    const check = document.getElementById("exampleCheck1");
    if(email.value !== "" && pwd1 === pwd2 && check.checked === true && pwd1 !== ""){
        setSubmited(true);
        console.log('submitted');
         // Reset form to default state
      setPwd1("");
      setPwd2("");
      setNotMatch(false);
      check.checked = false;
      email.value = "";
    }else if(email.value === ""){
      setSubmited(!true);
      alert("Please fill email address!");
    }else if(pwd1 !== pwd2){
      setSubmited(!true);
      alert("Password not match!");
    }else if(check.checked === false){
      setSubmited(!true);
      alert("Agree the terms and conditions before submition.");
    }else if(pwd1 === ""){
      setSubmited(!true);
      alert("Enter your Password!");
    }
};


return (
    
<form onSubmit={handleSubmit} className="login-form" style={{width: "50%", margin: "auto", marginTop: "10%"}}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label" style={{color: "white"}}>Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" style={{color: "white"}}>Password</label>
      <input type="password" value={pwd1} onChange={handlePwd1Change} className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3">
    <label htmlFor="confirmInputPassword1" className="form-label" style={{color: "white"}}>Confirm Password</label>
    <input type="password" value={pwd2} onChange={handlePwd2Change} className="form-control" id="confirmInputPassword1" />
    {notMatch && <p style={{color: "red"}}>Passwords do not match</p>}
  </div>
    <div className="mb-3 form-check">
      <input type="checkbox" onChange={handleCheck} className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1" style={{color: "white"}}>I Agree</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    {submited && <p>Account created sucessfully. Go to <Link className='btn btn-secondary' to="/" >Home page</Link></p> }
</form>

);


};
export default Login;