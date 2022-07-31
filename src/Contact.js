import React from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigate=useNavigate();
  return (
<>
  <h1>Contact us</h1>
  <form className='contact'>
    <div>
      <label htmlFor='name'>Name</label>
      <input type="text" placeholder='Enter your name'/>
    </div>
    <div>
      <label htmlFor='email'>Email</label>
      <input type="email" placeholder='Enter your email'/>
    </div>
    <div>
      <label htmlFor='mobile'>mobile</label>
      <input type="text" placeholder='Enter your mobile'/>
    </div>
    <div>
      <label htmlFor='query'>query</label>
      <input type="textarea" placeholder='Enter your query'/>
    </div>
   <div>
   <button onClick={()=> navigate('/')} className='readmore'>submit</button>
   </div>
  </form>
</>
  )
}

export default Contact