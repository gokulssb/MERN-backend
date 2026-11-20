import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [data,setData]=useState({username:"",useremail:"",userpassword:""})


const handleChange =(e)=>{

setData((p)=>({...p,[e.target.name]:e.target.value}))

}


const handleSubmit = async(e)=>{

  e.preventDefault

  try {

    const res = await axios.post("http://localhost:5000/api/auth/register",data)

    alert(res.data.mgs)
    setData({username:"",useremail:"",userpassword:""})
    
  } catch (error) {

    console.log(error);
    
    


  }

  


  
}


  return (
<>

<form  onSubmit={handleSubmit}>

  <input type="text" placeholder='Enter The Name' value={data.username} onchange={handleChange}  />
    <input type="email" placeholder='Enter The email' value={data.useremail} onchange={handleChange}  />
      <input type="password" placeholder='Enter The password' value={data.userpassword} onchange={handleChange}  />
      <input type="submit" value={"register"} />



</form>

</>  )
}

export default App