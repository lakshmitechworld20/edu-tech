import { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../App.css';
 

function SignIn() {

// const[events,updateEvents]= useState({});

const [signinUser,signinNewUser] = useState({emailId:"",password:""});

const [successMessage, setSuccessMessage] = useState('');

useEffect(()=>{

  let targetapi = "http://localhost:3001/events/login";

  fetch(targetapi).then(response => response.json()).then(response =>{
    alert(response);

    signinNewUser(response);
  } )
},[])

const handleSubmit = (e)=> {
  e.preventDefault();
  let targetapi = "http://localhost:3001/events/login";


 
    const requestOptions = {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signinUser)
    }
   fetch(targetapi, requestOptions).then(response => {response.json();
    setTimeout(() => {
      setSuccessMessage(' You are Signed In!');
      signinNewUser({
        emailId: '',
        password: ''
       
      });
    }, 1000);
  })
   .catch(error =>{

    console.error("there was an error!", error);
   } )}


  return (

    <div class="card">
<div className="app">
<h2 class="heading"> Sign In </h2>
   
      <form className="registration-form" onSubmit={handleSubmit}>

     
        <div >

        <label>
          <FaEnvelope className="styleicon"/>
                  <input class="input-field" type="text" placeholder="User email"
        value={signinUser.emailId}
        onChange={(e)=>signinNewUser({...signinUser,emailId:e.target.value})} />
</label>
        </div>
        <div >
        <label>
          <FaLock className="styleicon"/>
        <input class="input-field" type="password" placeholder="Password"
        value={signinUser.password}
        onChange={(e)=>signinNewUser({...signinUser,password:e.target.value})} />
</label>
        </div>
         
        

      <p class="ac" >Don't have an account?  {  <Link to="register-user">Register here</Link> }  
       </p>
      
        <button type="submit"> Sign In </button>


      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      </div>
      );

  }
export default SignIn