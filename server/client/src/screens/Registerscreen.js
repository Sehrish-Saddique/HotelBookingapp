import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from "../components/Loader";
import Error from "../components/Error"; 
import Success from "../components/Success";
 function Registerscreen() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')
  const[confirmpassword,setConfirmpassword]=useState('')

  const[loading,setloading]=useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();
  async function register(){
    if (password==confirmpassword){
      const user={
        name:name,
        email:email,
        password:password,
        confirmpassword:confirmpassword
      }
       try{
        setloading(true)
        const result = await axios.post('/api/users/register',user).data
        setloading(false)
        setsuccess(true)
        setName('')
        setEmail('')
        setPassword('')
        setConfirmpassword('')
       }
       catch(error){
          setloading(false)
          seterror(true)
         console.log(error)
       }
    }
    else{
      alert('Passwords not matched')
    }
  }
  return (<>

  {loading && (<Loader/>)}
  {error && (<Error message='Something went wrong, please try again later'/>)}
  {success && (<Success message='Registration Successfull'/>)}

       <div className='row justify-content-center  bs mt-5 rounded'>
       <div className='col-md-5 '>
      <h2 className='text-center m-2 ' style={{ fontSize: '35px' }}>Register</h2>
     <div className='col form text-center'>
     <input type='text' placeholder='Name' className='form-control mb-3 col-sm-5'  value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type='email' placeholder='Email' className='form-control mb-3 col-sm-5' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type='password' placeholder='Password' className='form-control mb-3 col-sm-5' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <input type='password' placeholder='Confirm Password' className='form-control mb-3 col-sm-5' value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}}/>
      <button className='btn btn-primary col-sm-5 ml-4 form mb-4' onClick={register}>REGISTER</button>
     </div>
     </div>
      </div>
      </>
   )
}

export default Registerscreen