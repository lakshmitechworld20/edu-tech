import {useEffect, useState} from "react";
import './App.css';

function App() {

// const[events,updateEvents]= useState({});

const [newUser,updateNewUser] = useState({firstName:"",lastName:"",emailId:"",password:""});


useEffect(()=>{

  let targetapi = "http://localhost:3001/events/newuser";

  fetch(targetapi).then(response => response.json()).then(response =>{
    updateNewUser(response);
  } )
},[])

const handleSubmit = (e)=> {
  e.preventDefault();
  let targetapi = "http://localhost:3001/events/newuser";


 
    const requestOptions = {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }
   fetch(targetapi, requestOptions).then(response => response.json())
   .catch(error =>{

    console.error("there was an erroe!", error);
   } )}

  


  return (
    <div className="App">

      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
        <input type="text" 
        value={newUser.firstName}
        onChange={(e)=>updateNewUser({...newUser,firstName:e.target.value})} />

        </div>
        <div>
        <label>Last Name</label>
        <input type="text" 
        value={newUser.lastName}
        onChange={(e)=>updateNewUser({...newUser,lastName:e.target.value})} />

        </div>
        <div>
        <label>E-mail</label>
        <input type="text" 
        value={newUser.emailId}
        onChange={(e)=>updateNewUser({...newUser,emailId:e.target.value})} />

        </div>
        <div>
        <label>Password</label>
        <input type="password" 
        value={newUser.password}
        onChange={(e)=>updateNewUser({...newUser,password:e.target.value})} />

        </div>

        <div>
          <button>Submit</button>
        </div>

      </form>
    </div>
  );

  }
export default App;
