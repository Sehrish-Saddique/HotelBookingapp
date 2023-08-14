import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from "../components/Loader";
import Error from "../components/Error"; 


function Loginscreen() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  const[loading,setloading]=useState(false);
  const [error, seterror] = useState();

  async function Login(){
    
      const user={
         email,
        password,
    }
    try{
      setloading(true)
      const result = (await axios.post('/api/users/login',user)).data
      setloading(false)

      localStorage.setItem('currentUser',JSON.stringify(result))
      window.location.href='/home'
      }
     catch(error){
        setloading(false)
        seterror(true)
      }
   }
  return (

    <div> 
    {loading && (<Loader/>)}

       <div className='row justify-content-center  bs mt-5 rounded'>
       <div className='col-md-5 '>
       {error && (<Error message='Invalid Credentials'/>)}
      <h2 className='text-center m-2 ' style={{ fontSize: '35px' }}>Login</h2>
     <div className='col form text-center'>
      <input type='email' placeholder='Email' className='form-control mb-3 col-sm-5' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type='password' placeholder='Password' className='form-control mb-3 col-sm-5' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button className='btn btn-primary col-sm-5 ml-4 form mb-4' onClick={Login}>Login</button>
     </div>
     </div>
      </div>
  </div>
   )
}

export default Loginscreen